
import {addCat, findCatById, listAllCats} from "../models/cat-model.js";

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById =async (req, res) => {
   const cat = await findCatById(req.params.id);
  if (cat) {
      res.json(cat);
    } else {
      res.sendStatus(404);
    }
};

const postCat = (req, res) => {
  console.log("postCat", req.body);
  //console.log('req', req);

  const result = addCat(req.body, req.file );

  if (result.cat_id) {
    res.status(201);
    res.json({message: 'New cat added.', result});
  } else {
    res.sendStatus(400);
  }
};

  // not implemented in this example, this is future homework
const putCat = async (req, res) => {
  result = await updateUser(req.body, req.params.id);
  if(!result) {
    res.sendStatus(404);
    return;
  }
  res.json(result);
};


const deleteCat = (req, res) => {
  // not implemented in this example, this is future homework
  res.sendStatus(200);
};

export {getCat, getCatById, postCat, putCat, deleteCat};
