import supabase from "./supabase";

// This is the user details that I get based on the userId in the params
export async function getUser(userId) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("userId", userId)
    .single();

  if (error)
    throw new Error(`There was a problem getting the user - ${error.message}`);

  return data;
}
