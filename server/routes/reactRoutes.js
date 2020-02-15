import express from 'express';
import { renderView } from '../controllers/react';

const router = express.Router();

router.use('/', renderView);
router.use('/*', renderView);

export default router;
