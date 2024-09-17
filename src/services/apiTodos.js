import supabase from "./supabase";

export async function getAllTodos(todoId) {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("todo_id", todoId)
    .order("created_at", { ascending: false });

  if (error)
    throw new Error(`There was a problem getting todos - ${error.message}`);

  return data;
}

export async function addTodos(todoObj) {
  const { data, error } = await supabase
    .from("todos")
    .insert([todoObj])
    .select();

  if (error)
    throw new Error(`There was a problem adding todos - ${error.message}`);

  return data;
}

export async function deleteTodo(id) {
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error)
    throw new Error(
      `There was a problem deleting your todo - ${error.message}`
    );
}

export async function updateTodos({ id, title, description }) {
  const { data, error } = await supabase
    .from("todos")
    .update({ title, description })
    .eq("id", id)
    .select();

  if (error)
    throw new Error(`There was a problem updating todos - ${error.message}`);

  return data;
}
