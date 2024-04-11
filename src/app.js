

import express from 'express';
import api from './api/index.js';
// const hostname = '127.0.0.1';
const app = express();
// const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));
app.use('/api/v1', api);

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

export default app;
