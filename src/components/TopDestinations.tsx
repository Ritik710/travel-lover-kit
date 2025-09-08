import { Star, MapPin } from "lucide-react";
import baliImage from "@/assets/destination-bali.jpg";
import parisImage from "@/assets/destination-paris.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";

const TopDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: baliImage,
      price: "₹25,999",
      originalPrice: "₹35,999",
      rating: 4.8,
      reviews: 2847,
      description: "Tropical paradise with beaches and culture",
      badge: "30% OFF"
    },
    {
      id: 2,
      name: "Paris, France",
      image: parisImage,
      price: "₹45,999",
      originalPrice: "₹55,999",
      rating: 4.9,
      reviews: 3241,
      description: "City of love and iconic landmarks",
      badge: "BESTSELLER"
    },
    {
      id: 3,
      name: "Maldives",
      image: maldivesImage,
      price: "₹35,999",
      originalPrice: "₹49,999",
      rating: 4.7,
      reviews: 1893,
      description: "Luxury overwater villas and pristine beaches",
      badge: "LIMITED"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most beautiful places with unbeatable deals
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 destination-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    destination.badge === "BESTSELLER" 
                      ? "bg-success" 
                      : destination.badge === "LIMITED"
                      ? "bg-red-500"
                      : "bg-gradient-offer"
                  }`}>
                    {destination.badge}
                  </span>
                </div>

                {/* Location Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {destination.rating}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {destination.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {destination.originalPrice}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {destination.reviews} reviews
                  </span>
                </div>

                <button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary-hover py-3 rounded-lg font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;