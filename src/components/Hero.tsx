import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-chitty-orange/10 via-chitty-black to-chitty-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-chitty-orange/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chitty-orange/10 rounded-full blur-[128px] animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient">Chitty</span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-gray-300 mb-4">
            Web3 Business Operating System
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Transform your business with blockchain-powered asset digitization, 
            intelligent financial management, and automated legal operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#pillars"
              className="px-8 py-4 bg-chitty-orange hover:bg-chitty-orange-dark transition-colors rounded-lg font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Platform
            </motion.a>
            <motion.a
              href="https://chittyfinance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-chitty-orange text-chitty-orange hover:bg-chitty-orange hover:text-white transition-all rounded-lg font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Launch Finance
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero