export const getAllUsers = async (id) => {
  const getUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!getUsers.ok) return new Error("something went wrong");

  return await getUsers.json();
};
export const getAllUsersDetails = async (id) => {
  const getUsers = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!getUsers.ok) return new Error("something went wrong");

  return await getUsers.json();
};
