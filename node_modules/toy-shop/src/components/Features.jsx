import { Shield, Truck, Gift, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Certified",
      description: "All toys are safety tested and certified for children",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Gift Wrapping",
      description: "Beautiful gift wrapping available for special occasions",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Only the best quality toys from trusted brands",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-gradient">ToyShop</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to bringing joy and quality to every child
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
