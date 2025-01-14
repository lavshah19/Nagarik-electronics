import React from 'react'


const Aboutcooling = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Hero Image */}
        <div className="text-center mb-12 relative">
          <div className="w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src="https://www.usatoday.com/gcdn/presto/2022/05/09/USAT/baa20b3e-8f27-4a5c-8ec2-bc4fd8bcec62-gettyimagesAlexLMX.png?width=660&height=372&fit=crop&format=pjpg&auto=webp"
              alt="Nagarik Electronics Store"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nagarik Electronics</h1>
          <p className="text-xl text-gray-600">Your Trusted Partner for Quality Cooling Solutions</p>
        </div>

        {/* About Section with Shop Image */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">About Our Shop</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Nagarik Electronics, your one-stop destination for all cooling solutions. We specialize in providing high-quality fans, table fans, and various cooling equipment to keep your space comfortable and well-ventilated.
              </p>
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://dailyasianage.com/library/1490036078_7.jpg"
                alt="Inside our store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="https://blueberrysindia.com/wp-content/uploads/2021/09/2-1-1536x1536.jpg"
                alt="Table Fan"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Table Fans</h3>
              <p className="text-gray-600">High-performance table fans perfect for homes and offices.</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/71whSf-qEcL._AC_SL1500_.jpg"
                alt="Ceiling Fan"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Ceiling Fans</h3>
              <p className="text-gray-600">Energy-efficient ceiling fans with modern designs.</p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src="/ourgallery/2.jpeg"
                alt="Cooling Accessories"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Cooling Accessories</h3>
              <p className="text-gray-600">Essential cooling accessories and spare parts.</p>
            </div>
          </div>
        </div>

        {/* Contact Section with Map */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Visit Our Store</h2>
              <div className="text-gray-700">
                <p className="mb-2">📍 Bansgadhi municipality-8, Bardiya</p>
                <p className="mb-2">📞 Phone: 9801747035, 9858047035</p>
                <p className="mb-2">⏰ Hours: Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>✉️ Email: nagarikelectronics1986@gmail.com</p>
              </div>
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden">
              <img
                src="/ourgallery/1.jpeg"
                alt="Store location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcooling
