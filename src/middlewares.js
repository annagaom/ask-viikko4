import sharp from 'sharp';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const createThumbnail = async (req, res, next) => {
    if (!req.file) {
        next();
        return;
    }

    console.log("req.file in createThumbnail", req.file);

    const [filename, extension] = req.file.filename.split('.')

    sharp(req.file.path)
        .resize(160, 160)
        .png()
        .toFile(`${req.file.destination}/${filename}_thumb.${extension}`)
        .then(() => next())

};

const notFoundHandler = (req, res, next) => {
  console.log = ('req', req);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error); // forward error to error handler
};
/**
* Custom default middleware for handling errors
*/
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500); // default is 500 if err.status is not defined
  res.json({

    message: err.message,
    status: err.status || 500

  });
};


export { createThumbnail, notFoundHandler, errorHandler};

