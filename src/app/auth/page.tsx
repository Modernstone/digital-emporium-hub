
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
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium text-gray-600 mb-4">Authentication Coming Soon</h2>
            <p className="text-gray-500 mb-8">This feature is currently under development.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Auth;
