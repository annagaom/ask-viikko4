import express from 'express';

import catRouter from 'src/api/routes/router.js';

const router = express.Router();

router.use('/cats', catRouter);

export default router;
