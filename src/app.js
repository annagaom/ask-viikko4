import express from 'express';
import api from './api/indexUser.js';
import { getUser, getUserById, postUser, putUser, deleteUser } from './api/controllers/user-controller.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/api/v1', api);


app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/users', getUser);
app.get('/api/v1/users/:id', getUserById);
app.post('/api/v1/users', postUser);
app.put('/api/v1/users/:id', putUser);
app.delete('/api/v1/users/:id', deleteUser);

export default app;
