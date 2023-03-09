import express from 'express';

import {
    getUser,
    getUserFollowing,
    getUserFollowers,
    followUnfollow
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/** Read */
router.get('/:id', verifyToken, getUser);
router.get('/:id/following', verifyToken, getUserFollowing);
router.get('/:id/followers', verifyToken, getUserFollowers);

/** Update */
router.patch('/:id/:followedId', verifyToken, followUnfollow);

export default router;