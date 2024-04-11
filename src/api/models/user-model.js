const userItems = [
  {
      user_id: 3609,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@metropolia.fi',
      role: 'user',
      password: 'password',
  },
  {
      user_id: 3610,
      name: 'Lili Marleen',
      username: 'lilim',
      email: 'sarapap@metropolia.fi',
      role: 'user',
      password: 'password',
  },
  {
      user_id: 3611,
      name: 'Laura Malmivaara',
      username: 'lauram',
      email: 'lauram@metropolia.fi',
      role: 'user',
      password: 'password',
  },
];

const allUsers = () => {
  return userItems;
};

const findUserById = (id) => {
  return userItems.find((item) => item.user_id == id);
};

const addUser = (user) => {
  const { name, username, email, role, password } = user;
  const newId = userItems[0].user_id + 1;
  userItems.unshift({ user_id: newId, name, username, email, role, password });
  return { user_id: newId };
};

export { allUsers, findUserById, addUser };
