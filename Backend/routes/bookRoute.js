import express from 'express';
import { getAllBooks, getSingleBook, deleteBook, updateBooks, createBook } from '../controllers/bookController.js'

const router = express.Router();

router.get('/All', getAllBooks);
router.get('/:id', getSingleBook);
router.delete('/delete/:id', deleteBook);
router.patch('/update/:id', updateBooks);
router.post('/add', createBook);


export default router;
