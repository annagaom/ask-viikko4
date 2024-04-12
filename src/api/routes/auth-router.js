import express from 'express';
import {getMe, postLogin} from '../controllers/auth-controller.js';
import {authenticateToken} from '../middlewares.js';

const authRouter = express.Router();

authRouter.route('/login').post();
// catRouter.route('/').get(getCat).post(postCat);

// catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);


// router:

authRouter.route('/me').get(authenticateToken, getMe);

export default authRouter;

