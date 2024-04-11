import express from 'express';
import api from './api/indexUser.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/api/v1', api);


app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'visku',
    birthdate: '2021-01-01',
    weight: 12,
    owner: 2,
    image: 'https://loremflickr.com/320/240/cat',
  };

  app.get('/api/v1/users', (req, res) => {
    res.json(users);
  });


  res.json(cat);
});



export default app;
