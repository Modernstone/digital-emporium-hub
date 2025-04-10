
'use client';

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-tech-navy mb-8">Your Cart</h1>
          {/* Cart content would go here */}
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/">
              <button className="bg-tech-blue hover:bg-tech-blue/90 text-white px-4 py-2 rounded">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cart;
