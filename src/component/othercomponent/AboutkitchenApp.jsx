import React from 'react'

const AboutkitchenApp = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Nagarik Electronics</h1>
          <p className="text-lg text-gray-600">Your friendly kitchen appliance store since 2073 B.S.</p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>
            <p className="text-gray-600">
              For over 8 years, we've been helping families find the best kitchen appliances
              for their homes. We choose our products carefully to make sure you get quality
              items that work well and look great.
            </p>
            <p className="text-gray-600">
              Our friendly team is here to help you find the right appliances that fit your
              home and your budget.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://megafurniture.sg/cdn/shop/articles/buying-guide-how-to-get-the-best-kitchen-appliances-megafurniture_9e2e88d4-59ff-48e4-882a-b1a71451a221.jpg?v=1721304078&width=2000" 
              alt="Nagarik Electronics Store" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">We sell trusted brands you can count on</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Great Service</h3>
            <p className="text-gray-600">We help set up your appliances and support you after purchase</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair Prices</h3>
            <p className="text-gray-600">Good deals and easy payment options</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Promise to You</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're here to help you find the best kitchen appliances for your home. 
            We offer quality products, friendly service, and expert advice to make 
            your kitchen better.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutkitchenApp