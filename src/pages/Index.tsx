
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { Link } from "react-router-dom";

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
      
      {/* Category Preview Sections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-tech-navy mb-2">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of products across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phones Category */}
            <div className="bg-tech-gray/20 rounded-lg p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2342&auto=format&fit=crop" 
                alt="Phones" 
                className="w-32 h-32 mx-auto object-contain mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Phones</h3>
              <p className="text-gray-600 mb-4">
                Discover the latest smartphones with cutting-edge features
              </p>
              <Link to="/phones">
                <Button className="bg-tech-blue hover:bg-tech-blue/90">
                  View All Phones
                </Button>
              </Link>
            </div>
            
            {/* Laptops Category */}
            <div className="bg-tech-gray/20 rounded-lg p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2592&auto=format&fit=crop" 
                alt="Laptops" 
                className="w-32 h-32 mx-auto object-contain mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Laptops</h3>
              <p className="text-gray-600 mb-4">
                Powerful computers for work, gaming, and everything in between
              </p>
              <Link to="/laptops">
                <Button className="bg-tech-blue hover:bg-tech-blue/90">
                  View All Laptops
                </Button>
              </Link>
            </div>
            
            {/* Accessories Category */}
            <div className="bg-tech-gray/20 rounded-lg p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop" 
                alt="Accessories" 
                className="w-32 h-32 mx-auto object-contain mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Accessories</h3>
              <p className="text-gray-600 mb-4">
                Enhance your tech experience with our range of accessories
              </p>
              <Link to="/accessories">
                <Button className="bg-tech-blue hover:bg-tech-blue/90">
                  View All Accessories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
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
              <Link to="/laptops">
                <Button className="bg-tech-blue hover:bg-tech-blue/90">
                  Explore PowerBooks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
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
