import React from "react";

const Content = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Empower Your Brand with DifferA
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Elevate your business with our top-notch digital marketing services. 
          </p>
          <a
            href="#services"
            className="px-8 py-3 bg-yellow-300 text-gray-800 font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Expertise
          </h2>

          {/* Services Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Brand Management */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-5xl text-blue-500 mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Brand Management</h3>
              <p className="text-gray-600">
                Build a strong, memorable brand identity and leave a lasting impression.
              </p>
            </div>

            {/* Card 2: Design */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-5xl text-purple-500 mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Creative Design</h3>
              <p className="text-gray-600">
                Stunning visuals and designs that communicate your story effectively.
              </p>
            </div>

            {/* Card 3: Social Media Management */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-5xl text-pink-500 mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <p className="text-gray-600">
                Boost engagement and grow your online presence across all platforms.
              </p>
            </div>

            {/* Card 4: SEO */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-5xl text-green-500 mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">SEO</h3>
              <p className="text-gray-600">
                Optimize your site to rank higher and attract the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-12">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with DifferA Today!
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Let's grow your business and achieve remarkable results together.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-yellow-300 text-gray-800 font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Content;