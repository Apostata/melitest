import express from 'express';
import { getProducts, getProduct, getProductDescription } from '../controllers/api';

const router = express.Router();

router.get('/items', getProducts);
router.get('/items/:id', getProduct);
//router.get('/items/:id/description', getProductDescription);

export default router;
