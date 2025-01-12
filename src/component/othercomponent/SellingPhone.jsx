import React from 'react'
import { motion } from 'framer-motion'

const SellingPhone = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Premium Smartphones at Best Prices
        </h1>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Our Phones?</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> 100% Genuine Products
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Official Warranty Coverage
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Expert Technical Support
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Competitive Prices
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-8">Featured Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="iPhone Models" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Apple iPhones</h3>
                <p className="text-gray-600">Latest iPhone models with official warranty</p>
              </div>
            </div>

            {/* Brand Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1691449808001-bb8c157f0094?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Samsung Models" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Samsung Galaxy</h3>
                <p className="text-gray-600">Premium Android experience with Samsung</p>
              </div>
            </div>

            {/* Brand Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1724341039339-036842055cae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Google Pixel Models" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Pixel</h3>
                <p className="text-gray-600">Pure Android with exceptional camera quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Budget Phones Section */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl font-semibold text-white mb-8"
            variants={itemVariants}
          >
            Budget-Friendly Options
          </motion.h2>
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg text-gray-700 mb-6 border-l-4 border-blue-500 pl-4"
              variants={itemVariants}
            >
              We also offer a wide range of budget-friendly smartphones that don't compromise on quality:
            </motion.p>
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {[
                {
                  title: "Xiaomi/Redmi Series",
                  description: "Great features at affordable prices",
                  price: "Starting from NPR 17,500"
                },
                {
                  title: "Realme",
                  description: "Performance-focused budget devices",
                  price: "Starting from NPR 21,000"
                },
                {
                  title: "Motorola",
                  description: "Clean Android experience",
                  price: "Starting from NPR 18,500"
                },
                {
                  title: "Samsung A Series",
                  description: "Premium feel at mid-range prices",
                  price: "Starting from NPR 23,000"
                }
              ].map((phone, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start text-gray-700 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-md"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-blue-500 mr-2 text-xl">•</span>
                  <div>
                    <span className="font-semibold text-blue-800">{phone.title}</span>
                    <p className="text-sm text-gray-600">{phone.description}</p>
                    <p className="text-xs text-blue-600 mt-2">{phone.price}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Warranty Information</h2>
          <div className="warranty-details">
            <p className="text-lg text-gray-700 mb-4">All phones come with:</p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                1 Year Manufacturer Warranty
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                30 Days Return Policy
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Free Technical Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellingPhone