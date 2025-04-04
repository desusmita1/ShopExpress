// import products from '../data/products.js';
import express from 'express';  // <-- You need this import
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import {authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
} from '../controllers/userController.js';
import {protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router();  // <-- You need to define router before using it

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);


export default router;