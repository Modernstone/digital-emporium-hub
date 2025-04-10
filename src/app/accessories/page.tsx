
'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Accessories = () => {
  return (
    <main>
      <Navbar />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-tech-navy mb-8">Accessories</h1>
        </div>
      </div>
      
      <ProductGrid 
        title="All Accessories" 
        category="accessory"
        productCount={8}
      />
      
      <Footer />
    </main>
  );
};

export default Accessories;
