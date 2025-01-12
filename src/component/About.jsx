import React from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const cards = [
    {
      title: "Local Trusted Shop",
      description: "As a local business in Bansgadhi, we understand our community's needs and provide personalized service to each customer.",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-l-4 border-blue-500"
    },
    {
      title: "Quick Repair Service",
      description: "From screen repairs to battery replacements, we fix most phone problems within 24 hours, getting you back to your daily routine.",
      bgColor: "bg-green-50 hover:bg-green-100",
      borderColor: "border-l-4 border-green-500"
    },
    {
      title: "Wide Range of Phones",
      description: "We offer both new and certified pre-owned phones at great prices, with all used phones thoroughly tested and warranted.",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      borderColor: "border-l-4 border-purple-500"
    },
    {
      title: "Professional Support",
      description: "Our experienced team provides honest advice and clear pricing, ensuring you get the best solution for your needs and budget.",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      borderColor: "border-l-4 border-orange-500"
    }
  ]

  return (
    <div className="p-8 bg-gray-100">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl font-bold mb-2 text-center text-gray-800"
          variants={itemVariants}
        >
          About Us
        </motion.h1>
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center text-gray-800"
          variants={itemVariants}
        >
          Welcome to Nagarik Electronics
        </motion.h2>
        <motion.div 
          className="p-6 mb-4 bg-white rounded-lg shadow-md border border-gray-200"
          variants={itemVariants}
        >
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed mb-4"
            variants={itemVariants}
          >
            Located in Bansgadhi Municipality-8, Bardiya, we are your trusted local mobile phone shop. Since opening our doors, we've been serving our community with quality mobile phones, repair services, and excellent customer care.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Whether you need a new phone, quick repairs, or expert advice, our friendly team at Nagarik Electronics is here to help. We understand how important your phone is in daily life, which is why we strive to provide fast and reliable service.
          </motion.p>
        </motion.div>
        
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mt-8 mb-6"
          variants={itemVariants}
        >
          Why Choose Nagarik Electronics?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-sm transition-all duration-300 ${card.bgColor} ${card.borderColor}`}
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-2 text-gray-800">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 p-6 rounded-lg shadow-sm bg-gradient-to-r from-blue-50 to-purple-50 border-t-4 border-blue-500"
          variants={itemVariants}
        >
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Visit Us</h3>
          <p className="text-gray-700">
            Find us in Bansgadhi Municipality-8, Bardiya. We're open Monday to Saturday, ready to help with all your mobile phone needs.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About