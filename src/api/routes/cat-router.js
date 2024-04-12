
import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js'
import { authenticateToken } from '../../middlewares.js';

const catRouter = express.Router();

catRouter.route('/').get(getCat).post(postCat);

catRouter.route('/:id').get(getCatById).put(authenticateToken).delete(authenticateToken);

export default catRouter;
