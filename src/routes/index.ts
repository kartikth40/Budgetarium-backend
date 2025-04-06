import express from 'express';
import categories from './category.ts';

const router = express.Router();

router.use('/category', categories);

export default router;

