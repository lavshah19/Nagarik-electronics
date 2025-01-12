import React from 'react'
import { motion } from 'framer-motion'

const Ourgallery = () => {
  return (
    <div className="container mx-auto py-16">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Our Gallery</h2>
        <p className="text-gray-600 mt-2">Explore our latest collection</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gallery Items */}
        {[1, 2, 3, 4, 5].map((item, index) => (
          <motion.div 
            key={item}
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img 
              src={`/ourgallery/${item}.jpeg`}
              alt={`Gallery Item ${item}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Ourgallery