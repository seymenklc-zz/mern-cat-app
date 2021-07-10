import express from 'express';
import { addNewPost, getPosts, deletePost } from '../controllers/post-controllers.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/addNew', addNewPost);
router.delete('/:id', deletePost);

export default router;