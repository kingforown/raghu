import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'hoodies',
    name: 'Hoodies',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    count: 24
  },
  {
    id: 'tshirts',
    name: 'T-Shirts',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    count: 32
  },
  {
    id: 'jackets',
    name: 'Jackets',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    count: 18
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg',
    count: 15
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Urban Streetwear Hoodie',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'hoodies',
    isNew: true,
    colors: ['black', 'gray', 'navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Graphic Print Tee',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    category: 'tshirts',
    isTrending: true,
    colors: ['black', 'white', 'red'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '3',
    name: 'Bomber Jacket',
    price: 4299,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    category: 'jackets',
    isNew: true,
    colors: ['black', 'olive', 'navy'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Vintage Wash Tee',
    price: 1499,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    category: 'tshirts',
    colors: ['gray', 'blue', 'green'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '5',
    name: 'Premium Zip Hoodie',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'hoodies',
    isTrending: true,
    colors: ['black', 'white', 'gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '6',
    name: 'Denim Jacket',
    price: 3799,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    category: 'jackets',
    colors: ['blue', 'black', 'gray'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '7',
    name: 'Classic Logo Tee',
    price: 999,
    originalPrice: 1399,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    category: 'tshirts',
    isNew: true,
    colors: ['white', 'black', 'gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '8',
    name: 'Oversized Hoodie',
    price: 2799,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'hoodies',
    isTrending: true,
    colors: ['black', 'cream', 'brown'],
    sizes: ['M', 'L', 'XL', 'XXL']
  }
];