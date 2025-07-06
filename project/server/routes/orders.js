import express from 'express';
import { readOrders, writeOrders } from '../utils/fileHelpers.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Create order
router.post('/', (req, res) => {
  try {
    const orders = readOrders();
    const newOrder = {
      id: uuidv4(),
      ...req.body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    orders.push(newOrder);
    writeOrders(orders);
    
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get orders
router.get('/', (req, res) => {
  try {
    const orders = readOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;