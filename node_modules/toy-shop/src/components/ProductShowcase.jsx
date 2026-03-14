import { ShoppingCart, Heart } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Magic Building Blocks",
      price: "$29.99",
      image: "🧱",
      category: "Educational",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Super Robot Toy",
      price: "$39.99",
      image: "🤖",
      category: "Action",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Princess Castle",
      price: "$49.99",
      image: "🏰",
      category: "Pretend Play",
      rating: 5.0,
    },
    {
      id: 4,
      name: "Racing Car Set",
      price: "$34.99",
      image: "🏎️",
      category: "Vehicles",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Art & Craft Kit",
      price: "$24.99",
      image: "🎨",
      category: "Creative",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Musical Instruments",
      price: "$44.99",
      image: "🎹",
      category: "Musical",
      rating: 4.8,
    },
  ];

  return (
    <section id="details" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-gradient">Toys</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked collection of amazing toys
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
                <span className="text-8xl transform group-hover:scale-125 transition-transform duration-300">
                  {product.image}
                </span>
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-100 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-purple-600">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <p className="text-2xl font-bold text-gradient mb-4">
                  {product.price}
                </p>

                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

const Star = ({ className, fill }) => (
  <svg
    className={className}
    fill={fill || "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default ProductShowcase;
