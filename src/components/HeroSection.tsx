import { useState } from "react";
import { Search, Plane, MapPin, Train, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-travel-bg.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("flights");

  const tabs = [
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels", icon: MapPin },
    { id: "trains", label: "Trains", icon: Train },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Text */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book flights, hotels, and trains at the best prices. Your journey starts here.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-hero p-6 md:p-8 max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex-1 ${
                    activeTab === tab.id
                      ? "tab-active"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* From */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">From</label>
              <input
                type="text"
                placeholder="Delhi"
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            {/* To */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">To</label>
              <input
                type="text"
                placeholder="Mumbai"
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            {/* Departure Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Departure</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                />
                <Calendar className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Return Date (for flights) */}
            {activeTab === "flights" && (
              <div className="relative">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Return</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            )}

            {/* Travelers/Guests */}
            <div className="relative">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {activeTab === "hotels" ? "Guests" : "Travelers"}
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4+ Adults</option>
                </select>
                <Users className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto mt-6 btn-hero flex items-center justify-center space-x-2 min-w-[200px] mx-auto">
            <Search className="h-5 w-5" />
            <span>Search {tabs.find(tab => tab.id === activeTab)?.label}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;