import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kalakriti</h1>
            <p className="text-xl max-w-2xl">
              Preserving and promoting India's rich cultural heritage through authentic handicrafts
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="w-12 h-12 text-orange-600" />,
              title: 'Quality Assurance',
              description: 'Every product is handpicked and verified for authenticity and quality.'
            },
            {
              icon: <Users className="w-12 h-12 text-orange-600" />,
              title: 'Artisan Support',
              description: 'We work directly with artisans, ensuring fair compensation and sustainable practices.'
            },
            {
              icon: <Globe className="w-12 h-12 text-orange-600" />,
              title: 'Global Reach',
              description: 'Making Indian handicrafts accessible to art lovers worldwide.'
            }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, Kalakriti was born from a passion for India's diverse artistic
                  heritage and a desire to support the talented artisans who keep these traditions alive.
                </p>
                <p>
                  We believe that every handicraft tells a story - of ancient techniques passed down
                  through generations, of cultural traditions that have stood the test of time, and of
                  artisans who pour their heart and soul into their craft.
                </p>
                <p>
                  Our mission is to bridge the gap between these skilled artisans and art enthusiasts
                  worldwide, while ensuring that traditional craftsmanship continues to thrive in the
                  modern world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80"
                alt="Artisan at work"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80"
                alt="Traditional craft"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;