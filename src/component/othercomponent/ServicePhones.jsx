import React from 'react'
import { motion, useInView } from 'framer-motion'

const ServicePhones = () => {
  const services = [
    {
      title: "iPhone Repair",
      image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add your image path
      description: "Expert iPhone repair services for all models. Fast and reliable fixes for screens, batteries, and more."
    },
    {
      title: "iPad Repair",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add your image path
      description: "Professional iPad repair solutions. From screen replacements to charging issues, we've got you covered."
    },
    {
      title: "Android Repair",
      image: "https://images.unsplash.com/photo-1600087626120-062700394a01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add your image path
      description: "Comprehensive Android device repairs. We fix Samsung, Google, OnePlus, and all major brands."
    }
  ]

  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Repair Services</h2>
          <p className="text-white max-w-2xl mx-auto">
            Professional repair services for all your devices. Fast, reliable, and backed by our satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-blue-100"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <motion.h3 
                className="text-xl font-bold mb-2 text-gray-800"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicePhones