
import express from 'express';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';
import multer from 'multer';
import {authenticateToken, createThumbnail} from '../../middlewares.js';

const catRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const suffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

    // TODO fix spaces in filenames, we do not want to save files with spaces
    const originalFilename = file.originalname.split('.')[0].toLowerCase();
    const prefix = `${originalFilename}-${file.fieldname}`;

    let extension = 'jpg';

    if (file.mimetype === 'image/png') {
      extension = 'png';
    }

    // console.log("file in storage", file)

    const filename = `${prefix}-${suffix}.${extension}`;

    cb(null, filename);
  },
});


const upload = multer({
  // diskStorage destination property overwrites dest prop
  dest: 'uploads/',
  storage,
});

fileFilter: (req.file.cb) => {
  if (file.mimetype.startswith("image/") || file.mimetype.startswith("video/")) {
    cb(null, true);
  } else {
    const erro = new Error('Only images and videos are allowed!');
    erro.status = 400;
    cb(erro);
  }
};

catRouter
  .route('/')
  .get(getCat)
  .post(authenticateToken, upload.single('file'), createThumbnail, postCat);

catRouter
  .route('/:id')
  .get(getCatById)
  .put(authenticateToken, putCat)
  .delete(authenticateToken, deleteCat);

export default catRouter;
