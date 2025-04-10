
'use client';

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, ShoppingCart, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-tech-navy">
              TechHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={cn("hidden md:flex items-center space-x-8")}>
            <Link href="/" className="text-gray-700 hover:text-tech-blue transition-colors">
              Home
            </Link>
            <Link href="/phones" className="text-gray-700 hover:text-tech-blue transition-colors">
              Phones
            </Link>
            <Link href="/laptops" className="text-gray-700 hover:text-tech-blue transition-colors">
              Laptops
            </Link>
            <Link href="/accessories" className="text-gray-700 hover:text-tech-blue transition-colors">
              Accessories
            </Link>
          </div>

          {/* Search bar - desktop only */}
          <div className="hidden md:flex items-center w-1/3">
            <div className="relative w-full">
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Link href="/auth">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-2 bg-tech-orange text-white text-xs rounded-full"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search - visible when menu is open */}
        {isMenuOpen && isMobile && (
          <div className="mt-4 mb-2">
            <div className="relative w-full">
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && isMobile && (
          <div className="mt-2 pb-4 space-y-2 animate-fade-in">
            <Link href="/" className="block py-2 text-gray-700 hover:text-tech-blue transition-colors">
              Home
            </Link>
            <Link href="/phones" className="block py-2 text-gray-700 hover:text-tech-blue transition-colors">
              Phones
            </Link>
            <Link href="/laptops" className="block py-2 text-gray-700 hover:text-tech-blue transition-colors">
              Laptops
            </Link>
            <Link href="/accessories" className="block py-2 text-gray-700 hover:text-tech-blue transition-colors">
              Accessories
            </Link>
            <Link href="/auth" className="block py-2 text-gray-700 hover:text-tech-blue transition-colors">
              Sign In / Register
            </Link>
            <Link href="/cart" className="block py-2 text-gray-700 hover:text-tech-blue transition-colors">
              Cart {cartCount > 0 && <span className="ml-2 bg-tech-orange text-white px-2 py-0.5 rounded-full text-xs">{cartCount}</span>}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
