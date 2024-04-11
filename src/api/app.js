import express from 'express';
import api from './api/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/api/v1', api);

app.get('/', (req, res) => {
    const cat = {
        cat_id: 1,
        name: 'Whiskers',
        birthdate: '14-01-2002',
        weight: 5,
        owner: 'Sara',
        image: 'https://omaelainklinikka.fi/wp-content/uploads/2020/05/Kissan-hampaidenhoito-1536x1019.jpg'
    };
    res.json(cat);
});

export default app;
