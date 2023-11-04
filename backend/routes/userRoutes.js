import express from 'express';
import {
    authUser,
    registerUser, 
    updateUserProfile,
    getUserProfile,
    logoutUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/',authUser)
router.post('/auth', registerUser)
router.post('/logout',logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router