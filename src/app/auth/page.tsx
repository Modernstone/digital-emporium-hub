
'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Auth = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-tech-navy mb-8">Authentication</h1>
          {/* Auth content would go here */}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Auth;
