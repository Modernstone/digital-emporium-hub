
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-12 bg-tech-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-tech-navy mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of top-tier tech products that we recommend for their exceptional quality and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Category Sections */}
      <ProductGrid 
        title="Latest Phones" 
        category="phone" 
        id="phones"
      />
      
      <div className="bg-tech-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1569770218135-bea267ed7e84?q=80&w=2680&auto=format&fit=crop" 
                alt="Latest laptop" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">Experience Next-Level Performance</h2>
              <p className="text-xl text-gray-300 mb-6">
                The new PowerBook Ultra is designed for professionals who demand the best. 
                Lightning-fast processing, stunning display, and all-day battery life.
              </p>
              <Button className="bg-tech-blue hover:bg-tech-blue/90">
                Explore PowerBooks
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ProductGrid 
        title="Laptops & Computers" 
        category="laptop" 
        id="laptops"
      />
      
      <ProductGrid 
        title="Accessories" 
        category="accessory" 
        id="accessories"
      />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-tech-gray/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-tech-navy mb-2">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest products, exclusive deals, and tech news.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tech-blue"
              />
              <Button className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
