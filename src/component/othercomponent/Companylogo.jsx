import React from 'react';
import { motion } from 'framer-motion';

const Companylogo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6 md:py-10 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4">
        Popular Phone Brands We Service 
      </h2>
      <div className="overflow-hidden whitespace-nowrap w-full flex justify-center">
        <motion.div
          className="inline-flex"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          <div className="flex gap-4 md:gap-8 px-2 md:px-4">
            <img src="/logo/apple.png" alt="Apple" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/mi.png" alt="MI" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/oppo.png" alt="Oppo" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/samsung.png" alt="Samsung" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/realme.png" alt="Realme" className="h-8 md:h-12 w-auto object-contain" />
          </div>

          {/* Uncommented duplicate set for seamless loop */}
          <div className=" gap-4 md:gap-8 px-2 md:px-4 hidden xl:flex">
            <img src="/logo/apple.png" alt="Apple" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/mi.png" alt="MI" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/oppo.png" alt="Oppo" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/samsung.png" alt="Samsung" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logo/realme.png" alt="Realme" className="h-8 md:h-12 w-auto object-contain" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Companylogo;
