import express from 'express';

const router = express.Router();

const categories = [
  {
    id: '1',
    name: 'Computer Hardware',
    slug: 'computer-hardware',
    description: 'High-performance computer components and accessories',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
  },
  {
    id: '2',
    name: 'Mobile Accessories',
    slug: 'mobile-accessories',
    description: 'Premium mobile accessories and gadgets',
    image: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg'
  },
  {
    id: '3',
    name: 'Medical Equipment',
    slug: 'medical-equipment',
    description: 'Professional medical devices and health monitors',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg'
  },
  {
    id: '4',
    name: 'Home Appliances',
    slug: 'home-appliances',
    description: 'Modern home appliances for everyday convenience',
    image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg'
  }
];

// Get all categories
router.get('/', (req, res) => {
  res.json(categories);
});

// Get category by slug
router.get('/:slug', (req, res) => {
  const category = categories.find(cat => cat.slug === req.params.slug);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json(category);
});

export default router;