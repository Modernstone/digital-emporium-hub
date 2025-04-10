
export interface Product {
  id: number;
  name: string;
  category: "phone" | "laptop" | "accessory";
  price: number;
  image: string;
  rating: number;
  isFeatured?: boolean;
  specifications?: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ultimate Pro Phone",
    category: "phone",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2342&auto=format&fit=crop",
    rating: 4.8,
    isFeatured: true,
    specifications: ["6.7-inch Super Retina XDR display", "A16 Bionic chip", "48MP main camera", "Up to 29 hours video playback"],
    description: "Experience the next generation of mobile technology with our Ultimate Pro Phone. Featuring the fastest processor, an incredible camera system, and all-day battery life."
  },
  {
    id: 2,
    name: "Galaxy Max",
    category: "phone",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=2574&auto=format&fit=crop",
    rating: 4.7,
    specifications: ["6.8-inch Dynamic AMOLED display", "Snapdragon processor", "108MP camera", "5000mAh battery"],
    description: "The Galaxy Max sets a new standard for smartphone innovation with its brilliant display, professional-grade camera, and all-day battery."
  },
  {
    id: 3,
    name: "PowerBook Ultra",
    category: "laptop",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2592&auto=format&fit=crop",
    rating: 4.9,
    isFeatured: true,
    specifications: ["16-inch Retina display", "M2 Pro chip", "32GB unified memory", "1TB SSD"],
    description: "Meet the most powerful laptop we've ever built. PowerBook Ultra is designed for demanding professionals who need unstoppable performance."
  },
  {
    id: 4,
    name: "ThinBook Air",
    category: "laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=2535&auto=format&fit=crop",
    rating: 4.6,
    specifications: ["13.6-inch Liquid Retina display", "M2 chip", "16GB unified memory", "512GB SSD"],
    description: "Our thinnest and lightest laptop ever, perfect for working on the go while maintaining incredible performance and battery life."
  },
  {
    id: 5,
    name: "NoiseCancel Pro Headphones",
    category: "accessory",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop",
    rating: 4.7,
    isFeatured: true,
    specifications: ["Active Noise Cancellation", "Spatial Audio", "30 hours battery life", "Premium comfort"],
    description: "Immerse yourself in your music with industry-leading noise cancellation and exceptional sound quality."
  },
  {
    id: 6,
    name: "Ultra Watch Series 8",
    category: "accessory",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=2670&auto=format&fit=crop",
    rating: 4.8,
    specifications: ["Always-On Retina display", "Advanced health sensors", "Water resistant 50m", "18-hour battery life"],
    description: "Advanced health features and an always-on display make this the ultimate device for a healthier life."
  },
  {
    id: 7,
    name: "Gaming Laptop Extreme",
    category: "laptop",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=2066&auto=format&fit=crop",
    rating: 4.5,
    specifications: ["17.3-inch 240Hz display", "RTX 4080 GPU", "32GB RAM", "1TB SSD"],
    description: "Dominate your games with this powerful laptop featuring next-gen graphics and lightning-fast refresh rates."
  },
  {
    id: 8,
    name: "Budget Phone SE",
    category: "phone",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2580&auto=format&fit=crop",
    rating: 4.3,
    specifications: ["6.1-inch LCD", "A15 chip", "12MP camera", "Fast charging"],
    description: "Premium features at an affordable price. The Budget Phone SE delivers exceptional value without compromise."
  }
];

export const getProductsByCategory = (category: Product["category"]) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};
