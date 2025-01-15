import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutSmartphone = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Background Image */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="/savedphoto/phone11.jpg" 
              alt="Smartphone Services" 
              className="w-full h-64 sm:h-48 object-cover rounded-lg opacity-70"
            />
          </div>
          <div className="relative z-10 py-8 px-4">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg inline-block">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Smartphone Services at Nagarik Electronics
              </h1>
              <p className="text-base sm:text-lg text-black font-semibold">
                Your Trusted Partner for All Smartphone Needs
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="/savedphoto/phone2.jpg" 
                  alt="Premium Smartphones" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Premium Smartphone Sales
              </h2>
              <p className="text-gray-600">
                Discover our extensive collection of latest smartphones from leading brands.
                We offer genuine products with official warranty and after-sales support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="/ourgallery/3.jpeg" 
                  alt="Repair Services" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Expert Repair Services
              </h2>
              <p className="text-gray-600">
                Our certified technicians provide professional repair services for all
                smartphone brands, including screen replacement, battery replacement,
                and motherboard repairs.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="/savedphoto/whychooseus.jpg" 
                  alt="Our Team" 
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Genuine Parts & Products
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Expert Technical Team
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Quick Service Turnaround
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Warranty on Repairs
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="/ourgallery/4.jpeg" 
                  alt="Contact Us" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                Visit our store or contact us for any smartphone-related queries.
                Our expert team is ready to assist you.
              </p>
              <button 
                onClick={() => navigate('/contact')} 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSmartphone