const laptops = [
  {
    id: 1,
    name: "MacBook Pro 13-inch M2",
    brand: "Apple",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 1245,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    specs: {
      processor: "Apple M2",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.3\" Retina",
      os: "macOS"
    },
    inStock: true,
    isNew: true,
    discount: 13
  },
  {
    id: 2,
    name: "Dell XPS 15 9520",
    brand: "Dell",
    price: 1099,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 892,
    image: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: {
      processor: "Intel i7-12700H",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6\" 4K UHD+",
      os: "Windows 11 Pro"
    },
    inStock: true,
    isNew: false,
    discount: 15
  },
  {
    id: 3,
    name: "ThinkPad X1 Carbon Gen 10",
    brand: "Lenovo",
    price: 899,
    originalPrice: 1099,
    rating: 4.5,
    reviews: 756,
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    specs: {
      processor: "Intel i5-1240P",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14\" WUXGA",
      os: "Windows 11 Pro"
    },
    inStock: true,
    isNew: true,
    discount: 18
  },
  {
    id: 4,
    name: "ASUS ROG Strix G15",
    brand: "ASUS",
    price: 1199,
    originalPrice: 1399,
    rating: 4.7,
    reviews: 1023,
    image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: {
      processor: "AMD Ryzen 9 6900HX",
      ram: "32GB",
      storage: "1TB SSD",
      display: "15.6\" QHD 240Hz",
      os: "Windows 11 Home",
      gpu: "NVIDIA RTX 3070 Ti"
    },
    inStock: true,
    isNew: false,
    discount: 14
  },
  {
    id: 5,
    name: "HP Spectre x360 14",
    brand: "HP",
    price: 799,
    originalPrice: 999,
    rating: 4.4,
    reviews: 678,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: {
      processor: "Intel i7-1260P",
      ram: "16GB",
      storage: "1TB SSD",
      display: "14\" 3K2K OLED Touch",
      os: "Windows 11 Home"
    },
    inStock: false,
    isNew: false,
    discount: 20
  },
  {
    id: 6,
    name: "Surface Laptop Studio",
    brand: "Microsoft",
    price: 1399,
    originalPrice: 1599,
    rating: 4.7,
    reviews: 845,
    image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: {
      processor: "Intel i7-11370H",
      ram: "32GB",
      storage: "1TB SSD",
      display: "14.4\" 120Hz Touch",
      os: "Windows 11 Pro",
      gpu: "NVIDIA RTX 3050 Ti"
    },
    inStock: true,
    isNew: true,
    discount: 13
  }
];

export default laptops;
