
import express from 'express';
import { clerkWebhooks } from '../Controllers/UserController.js';

const userRoutes = express.Router();
userRoutes.post('/webhooks',clerkWebhooks);



export default userRoutes;