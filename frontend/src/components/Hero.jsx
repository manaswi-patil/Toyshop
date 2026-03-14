import { ShoppingBag, Sparkles, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Magical Toys for Every Child
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Discover</span>
              <br />
              <span className="text-gray-800">Wonderful Toys</span>
              <br />
              <span className="text-gradient">For Your Kids</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Explore our amazing collection of toys that spark imagination,
              creativity, and endless fun for children of all ages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </button>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">5K+</div>
                <div className="text-gray-600">Toys Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Toy Icons */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Floating Toy Elements */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl transform rotate-12 animate-float shadow-xl flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>

              <div
                className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl transform -rotate-12 animate-float shadow-xl flex items-center justify-center"
                style={{ animationDelay: "1s" }}
              >
                <Sparkles className="w-16 h-16 text-white" />
              </div>

              <div
                className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-45 animate-float shadow-xl flex items-center justify-center"
                style={{ animationDelay: "2s" }}
              >
                <ShoppingBag className="w-14 h-14 text-white" />
              </div>

              <div className="absolute bottom-32 right-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce-slow shadow-xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              {/* Central Large Element */}
              <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center animate-float">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl">🎁</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
