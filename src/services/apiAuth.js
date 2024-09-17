import supabase from "./supabase";

export async function userSignUp({ email, password, fullname }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
      },
    },
  });

  if (error)
    throw new Error(`There was a problem signing you up - ${error.message}`);

  const userId = data.user?.id; // Get the user's id from the authentication response

  if (userId) {
    // Insert the user's fullname into the user table along with their user_id
    const { error: userInsertError } = await supabase
      .from("users") // Assuming your table is called 'user'
      .insert([{ userId, fullname }]);

    if (userInsertError) {
      throw new Error(
        `There was a problem inserting the user data - ${userInsertError.message}`
      );
    }
  }

  return data;
}

export async function getCurrentUserSession() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function userLogin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error)
    throw new Error(`There was a problem signing you in - ${error.message}`);

  return data;
}

export async function userLogout() {
  const { error } = await supabase.auth.signOut();

  if (error)
    throw new Error(`There was a problem loging out... - ${error.message}`);
}
