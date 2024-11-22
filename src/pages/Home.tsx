import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section with Slider */}
      <ImageSlider />

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Traditional Textiles",
              image:
                "https://www.triplekangkor.com/wp-content/uploads/2023/08/What-are-the-Cambodian-traditional-textiles-1024x574.jpg",
              description: "Hand-woven fabrics and intricate embroidery",
            },
            {
              title: "Pottery & Ceramics",
              image:
                "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80",
              description: "Artisanal clay crafts and traditional pottery",
            },
            {
              title: "Jewelry",
              image:
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
              description: "Handcrafted jewelry with cultural significance",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artisan Stories */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artisan Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the skilled craftspeople who pour their heart and soul into
              preserving India's rich artistic heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dev Kumar",
                craft: "Master Potter",
                location: "Jaipur, Rajasthan",
                image:
                  "https://us.123rf.com/450wm/prodigitalgirl/prodigitalgirl2301/prodigitalgirl230100125/197264411-potter-person-sculpts-a-pot-on-a-potters-wheel-with-his-hands-and-tool-close-up.jpg?ver=6",
                story:
                  "With 30 years of experience, Dev's pottery reflects the vibrant culture of Rajasthan. Each piece tells a story of tradition passed down through generations.",
                rating: 5,
              },
              {
                name: "Lakshmi Devi",
                craft: "Textile Weaver",
                location: "Varanasi, Uttar Pradesh",
                image:
                  "https://www.theluxurysignature.com/wp-content/uploads/2024/01/Thai-Sericulture-1-1.jpg",
                story:
                  "Specializing in Banarasi silk sarees, Lakshmi's intricate designs are inspired by the ghats of Varanasi and ancient Hindu motifs.",
                rating: 5,
              },
              {
                name: "Jay Modi",
                craft: "Metal Artisan",
                location: "Nashik, Madhya Pradesh",
                image: "https://m.media-amazon.com/images/I/71D5HnsITyL.jpg",
                story:
                  "A third-generation brass worker, Jay combines traditional techniques with contemporary designs to create stunning metalwork.",
                rating: 5,
              },
            ].map((artisan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {artisan.name}
                    </h3>
                    <div className="flex">
                      {[...Array(artisan.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-orange-600 font-medium mb-2">
                    {artisan.craft}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {artisan.location}
                  </p>
                  <p className="text-gray-600 mb-4">{artisan.story}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700"
                  >
                    View Collection
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image:
                  "https://img.freepik.com/free-photo/archeology-dig-site-with-ancient-remains-discoveries_23-2151786758.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728000000&semt=ais_hybrid",
                title: "Traditional Vase",
                price: "2,499",
              },
              {
                image:
                  "https://thenmozhidesigns.com/cdn/shop/files/V_RK6114copy.jpg?v=1695886293&width=908",
                title: "Authentic Saree",
                price: "14,999",
              },
              {
                image:
                  "https://d35l77wxi0xou3.cloudfront.net/collab/craft16370568724.png",
                title: "Braided Items",
                price: "4,999",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
                title: "Silver Jewelry",
                price: "1,999",
              },
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={`${product.image}?auto=format&fit=fill&q=80`}
                    alt={product.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;