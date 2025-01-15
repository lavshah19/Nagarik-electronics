import React from 'react'

const AboutTv = () => {
  return (
    <section className=" bg-gray-50">
      <div className="relative h-[300px] mb-12">
        <img 
          src="/savedphoto/tv1.jpg" 
          alt="Nagarik Electronics TV Showroom"
          className="w-full h-full object-cover object-center rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <h2 className="text-3xl font-bold text-white px-8 max-w-2xl">
            Your Entertainment Hub at Nagarik Electronics
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              At Nagarik Electronics, we bring you the latest in television technology, offering an extensive range of Smart TVs, OLED, QLED, and LED TVs from world-renowned brands. With over a decade of experience in consumer electronics, we understand that choosing the right TV is crucial for your home entertainment experience.
            </p>
            
            <div className="relative h-[200px] lg:h-[300px] my-8">
              <img 
                src="/savedphoto/tv2.jpg" 
                alt="tv"
                className="w-[80%] h-full object-cover  rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Why Choose Our TVs?</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Expert guidance from our knowledgeable staff
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Competitive prices and flexible payment options
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Genuine products with manufacturer warranty
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Free delivery and installation services
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our TV Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-medium text-blue-800">Smart TVs</h4>
                  <p className="text-base text-gray-600">Latest smart features with built-in streaming</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-medium text-blue-800">OLED TVs</h4>
                  <p className="text-base text-gray-600">Superior picture quality with perfect blacks</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-medium text-blue-800">QLED TVs</h4>
                  <p className="text-base text-gray-600">Vibrant colors and brightness</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-medium text-blue-800">4K & 8K TVs</h4>
                  <p className="text-base text-gray-600">Ultra-high definition resolution</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[250px] lg:h-[350px] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/savedphoto/tv3.jpg" 
                alt="Premium TV Display"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-xl text-white font-semibold">
                  Experience Premium Picture Quality
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Trusted Brands We Carry</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['samsung', 'LG', 'mi', 'realme', 'Sony', 'hisense'].map((brand) => (
              <div key={brand} className="p-4 bg-white rounded-lg shadow-sm">
                <img 
                  src={`/logo/${brand}.png`}
                  alt={`${brand} logo`}
                  className="h-12 w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our showroom to experience the difference in picture quality and sound. Our team is ready to help you find the perfect TV for your space and budget.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutTv