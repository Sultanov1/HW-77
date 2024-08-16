import express from "express";
import fileDb from '../fileDb';
import {CommentMutation} from '../types';

const commentsRouter = express.Router();

commentsRouter.get("/", async (req, res) => {
  const comments = await fileDb.getItems();
  return res.send(comments);
})

commentsRouter.get("/:id", async (req, res) => {
  const comments = await  fileDb.getItems();
  const comment = comments.find(g => g.id === req.params.id);
  return res.send(comment);
})

commentsRouter.post('/', async (req, res) => {
  if (!req.body) {
    return res.status(400).send({error: 'Data is required'});
  }

  const newComment: CommentMutation = {
    author: req.body.author,
    comment: req.body.comment,
    image: req.file ? req.file.filename : null,
  }

  try {
    const saveMessage =  await fileDb.addItem(newComment);
    return res.send(saveMessage);
  } catch (error) {
    return res.status(500).send({error: 'Server error!'});
  }
})

export default commentsRouter;