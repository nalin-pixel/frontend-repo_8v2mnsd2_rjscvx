export const categories = [
  {
    slug: 'clothing',
    name: 'Clothing',
    description: 'Comfortable everyday wear with timeless cuts.'
  },
  {
    slug: 'skincare',
    name: 'Skincare',
    description: 'Gentle, effective formulas for healthy skin.'
  }
];

export const products = [
  {
    id: 'tee-classic',
    title: 'Classic Cotton Tee',
    price: 24,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1531551622092-4bca6a0f3bf0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQ290dG9uJTIwVGVlfGVufDB8MHx8fDE3NjM2NzU3MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Soft 100% cotton tee with a relaxed fit. Built for daily comfort and durability.'
  },
  {
    id: 'hoodie-fleece',
    title: 'Fleece Hoodie',
    price: 58,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    description: 'Midweight fleece hoodie with a clean silhouette and cozy interior.'
  },
  {
    id: 'serum-vitc',
    title: 'Vitamin C Serum',
    price: 34,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
    description: 'Brightening daily serum with 10% stabilized Vitamin C for even, luminous skin.'
  },
  {
    id: 'cleanser-gentle',
    title: 'Gentle Gel Cleanser',
    price: 18,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1758638928928-3d1e5a29ab24?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2NzU3MzZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'pH-balanced cleanser that removes impurities without stripping moisture.'
  }
];

export function getCategory(slug) {
  return categories.find(c => c.slug === slug);
}

export function getProduct(id) {
  return products.find(p => p.id === id);
}
