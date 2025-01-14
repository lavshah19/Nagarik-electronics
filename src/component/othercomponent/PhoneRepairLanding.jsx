import React from 'react';
import { motion } from 'framer-motion';


const PhoneRepairLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Text left, Images right */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Text Content */}
            <motion.div 
              className="flex-1 text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Professional Repair Services
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Expert Phone & Tablet Repairs
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Professional repair services for all major brands. Fast, reliable, and affordable solutions to keep your devices running smoothly.
              </motion.p>
              <motion.button 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:nagarikelectronics1986@gmail.com'}
              >
                Book a Repair
              </motion.button>
            </motion.div>
            
            {/* Right Images side by side with diagonal tilt */}
            <motion.div 
              className="flex-1 flex justify-center items-center gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="transform -rotate-12 hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="relative w-48">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1681396658834-b56190480934?q=80&w=1887&auto=format&fit=crop"
                    alt="iPhone" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 rounded-b-lg">
                    <p className="text-white text-center font-medium">iPhone Repairs</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="transform rotate-12 hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="relative w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1780&auto=format&fit=crop"
                    alt="Samsung Phone" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 rounded-b-lg">
                    <p className="text-white text-center font-medium">Samsung Repairs</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section with animations */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">125+</div>
              <div className="text-gray-600 font-medium">Repairs Daily</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">600+</div>
              <div className="text-gray-600 font-medium">Expert Technicians</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Laptop Repair Section */}
      <motion.div 
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Laptop Image */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1770&auto=format&fit=crop"
                  alt="Laptop Repair" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>

            {/* Laptop Repair Content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Expert Laptop Services
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
                Professional Laptop Repair Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                We offer comprehensive laptop repair services including:
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  'Hardware repairs and replacements',
                  'Screen and display repairs',
                  'Keyboard and trackpad fixes',
                  'Battery replacement',
                  'Virus removal and software issues',
                  'Data recovery services'
                ].map((service, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {service}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:nagarikelectronics1986@gmail.com'}
              >
                Get Laptop Support
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneRepairLanding;