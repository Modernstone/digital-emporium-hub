
'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Laptops = () => {
  return (
    <main>
      <Navbar />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-tech-navy mb-8">Laptops & Computers</h1>
        </div>
      </div>
      
      <ProductGrid 
        title="All Laptops & Computers" 
        category="laptop"
        productCount={8}
      />
      
      <Footer />
    </main>
  );
};

export default Laptops;
