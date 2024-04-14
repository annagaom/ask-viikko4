import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/v1/cat', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'visku',
    birthdate: '2021-01-01',
    weight: 12,
    owner: "Anna",
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
