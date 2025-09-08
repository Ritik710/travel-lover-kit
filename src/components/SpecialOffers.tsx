import { Clock, Percent, Gift, Zap } from "lucide-react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Flash Sale",
      subtitle: "Up to 70% OFF",
      description: "Limited time offers on international flights",
      icon: Zap,
      gradient: "from-red-500 to-pink-500",
      timeLeft: "2 days left",
      code: "FLASH70"
    },
    {
      id: 2,
      title: "Weekend Getaway",
      subtitle: "Flat 40% OFF",
      description: "Book hotels for weekend trips",
      icon: Gift,
      gradient: "from-blue-500 to-cyan-500",
      timeLeft: "5 days left",
      code: "WEEKEND40"
    },
    {
      id: 3,
      title: "Early Bird",
      subtitle: "Save 50%",
      description: "Book 30 days in advance and save big",
      icon: Percent,
      gradient: "from-green-500 to-emerald-500",
      timeLeft: "Always available",
      code: "EARLY50"
    },
    {
      id: 4,
      title: "First Timer",
      subtitle: "Extra 25% OFF",
      description: "Special discount for new users",
      icon: Gift,
      gradient: "from-purple-500 to-violet-500",
      timeLeft: "Limited time",
      code: "FIRST25"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Special Offers & Deals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these amazing deals and save on your next trip
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative p-6">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${offer.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">
                    {offer.title}
                  </h3>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${offer.gradient} bg-clip-text text-transparent mb-2`}>
                    {offer.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {offer.description}
                  </p>

                  {/* Time Left */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {offer.timeLeft}
                    </span>
                  </div>

                  {/* Promo Code */}
                  <div className="bg-muted rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Use code:</span>
                      <span className="font-mono font-semibold text-primary">
                        {offer.code}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${offer.gradient} text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    Claim Offer
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss a Deal!
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive offers delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:ring-2 focus:ring-white/20 outline-none"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;