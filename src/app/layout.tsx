
import React from "react";
import "../index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/CartContext";

// Create a client
const queryClient = new QueryClient();

export const metadata = {
  title: 'Digital Emporium Hub',
  description: 'Your one-stop shop for all things tech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              {children}
            </CartProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
