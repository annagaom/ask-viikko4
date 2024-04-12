import { allUsers, findUserById, addUser } from '../models/user-model.js';
import bcrypt from 'bcrypt';

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


// const postUser = (req, res) => {
//   const newUser = {
//     name: 'Niki',
//     username: 'nisku',
//     email: 'nisku@metropolia.fi',
//     role: 'admin',
//     password: 'password'
//   };

const postUser = async(req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const result = await addUser(req.body);
  if (result.cat_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.sendStatus(400);
  }
//   const result = addUser(newUser);
//   res.json({ message: 'New user added.', result });
};

const putUser = (req, res) => {
  res.json({ message: 'User item updated.' });

};

const deleteUser = (req, res) => {
  res.json({ message: 'User item deleted.' });
};

export { getUser, getUserById, postUser, putUser, deleteUser };
