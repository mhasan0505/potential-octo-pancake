import express from "express";
import {
    newOrder,
    getSingleOrder,
    myOrders,
    allOrders,
    updateOrder,
    deleteOrder
} from '../controllers/OrderController.js';
import { isAuthenticatedUser, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.route('/new').post(isAuthenticatedUser, newOrder);
router.route('/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/me').get(isAuthenticatedUser, myOrders);

// Admin routes
router.route('/admin').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);
router.route('/admin/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

export default router;