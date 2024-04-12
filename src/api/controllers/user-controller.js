import { allUsers, findUserById, addUser } from '../models/user-model.js';

const getUser = (req, res) => {
    res.json(allUsers());
};

const getUserById = (req, res) => {
    const user = findUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};


const postUser = (req, res) => {
  const newUser = {
    name: 'Niki',
    username: 'nisku',
    email: 'nisku@metropolia.fi',
    role: 'admin',
    password: 'password'
  };

  const result = addUser(newUser);
  res.json({ message: 'New user added.', result });
};

const putUser = async(req, res) => {
  if (
    res.locals.user.id !== Number(req.params.id) &&
    res.locals.user.role !== 'admin'
) {
  res.sendStatus(403);
  return;
}
  res.json({ message: 'User item updated.' });
}

const deleteUser = (req, res) => {
  res.json({ message: 'User item deleted.' });
};

export { getUser, getUserById, postUser, putUser, deleteUser };
