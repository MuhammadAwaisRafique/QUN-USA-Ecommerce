import express from 'express';
import { readProducts, writeProducts } from '../utils/fileHelpers.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  try {
    const products = readProducts();
    const { category, search } = req.query;
    
    let filteredProducts = products;
    
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get product by ID
router.get('/:id', (req, res) => {
  try {
    const products = readProducts();
    const product = products.find(p => p.id === req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add product (admin only)
router.post('/', (req, res) => {
  try {
    const products = readProducts();
    const newProduct = {
      id: uuidv4(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    writeProducts(products);
    
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update product (admin only)
router.put('/:id', (req, res) => {
  try {
    const products = readProducts();
    const index = products.findIndex(p => p.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    products[index] = { ...products[index], ...req.body, updatedAt: new Date().toISOString() };
    writeProducts(products);
    
    res.json(products[index]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete product (admin only)
router.delete('/:id', (req, res) => {
  try {
    const products = readProducts();
    const filteredProducts = products.filter(p => p.id !== req.params.id);
    
    if (products.length === filteredProducts.length) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    writeProducts(filteredProducts);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;