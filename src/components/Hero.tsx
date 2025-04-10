
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-tech-navy to-tech-navy/90 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Next-Gen Tech <br />
              <span className="text-tech-blue">At Your Fingertips</span>
            </h1>
            <p className="text-lg md:text-xl max-w-md text-gray-200 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover the latest in phones, laptops, and cutting-edge accessories for the modern tech enthusiast.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                Shop Now
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-tech-navy">
                View Deals
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {/* Hero image with overlay */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607016284318-d1384f74de69?q=80&w=2787&auto=format&fit=crop"
                alt="Latest technology devices"
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-navy/30 to-transparent rounded-lg"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-tech-blue text-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">New Release</div>
              <div className="text-2xl font-bold">25% OFF</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tech-blue/10 clip-path-circle hidden lg:block"></div>
    </div>
  );
};

export default Hero;
