import express from 'express';
import * as TestController from '../controllers/TestController';
const router = express.Router();

router.get('/hello/:username', TestController.index);

export default router;