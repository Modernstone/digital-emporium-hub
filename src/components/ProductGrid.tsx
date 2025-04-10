
import { useState } from "react";
import { Product, getProductsByCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductGridProps {
  title: string;
  category: Product["category"];
  productCount?: number;
  id?: string;
}

const ProductGrid = ({ title, category, productCount = 4, id }: ProductGridProps) => {
  const [activeTab, setActiveTab] = useState<"all" | "popular" | "latest">("all");
  
  const products = getProductsByCategory(category);
  const displayProducts = products.slice(0, productCount);

  return (
    <section id={id} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-tech-navy mb-2 md:mb-0">{title}</h2>
          
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All</TabsTrigger>
              <TabsTrigger value="popular" onClick={() => setActiveTab("popular")}>Popular</TabsTrigger>
              <TabsTrigger value="latest" onClick={() => setActiveTab("latest")}>Latest</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {products.length > productCount && (
          <div className="flex justify-center mt-8">
            <button className="button-secondary">
              View All {title}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
