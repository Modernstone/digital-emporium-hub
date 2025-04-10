
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, image, rating } = product;
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (halfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <Card className="card-shadow hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
        />
        {product.isFeatured && (
          <div className="absolute top-0 right-0 bg-tech-blue text-white text-xs font-semibold px-2 py-1">
            Featured
          </div>
        )}
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg mb-1 text-tech-navy">{name}</h3>
        <div className="flex items-center mb-2">
          {renderRatingStars(rating)}
          <span className="text-xs text-gray-600 ml-1">({rating})</span>
        </div>
        <div className="font-bold text-xl text-tech-blue">${price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <Button 
          variant="outline" 
          size="sm"
          className="text-gray-700 hover:text-tech-blue"
        >
          Details
        </Button>
        <Button 
          onClick={handleAddToCart}
          size="sm" 
          className="bg-tech-orange hover:bg-tech-orange/90"
        >
          <ShoppingCart className="h-4 w-4 mr-1" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
