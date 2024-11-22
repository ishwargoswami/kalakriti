import express from 'express';
import {
  newAddress,
  getUserAddresses,
  updateAddress,
  deleteAddress
} from '../controllers/address.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/add', protect, newAddress);
router.get('/get', protect, getUserAddresses);
router.put('/update/:id', protect, updateAddress);
router.delete('/:id', protect, deleteAddress);

export default router;