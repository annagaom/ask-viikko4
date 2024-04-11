import express from 'express';
import app from 'src/app/indexUser.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/api/v1', api);

app.get('/', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'visku',
    birthdate: '2021-01-01',
    weight: 12,
    owner: 2,
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});

export default app;
