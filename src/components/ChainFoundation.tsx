import { motion } from 'framer-motion'
import { Layers, Lock, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'Immutable Records',
    description: 'Every transaction, asset, and contract secured on-chain forever'
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Real-time proof of ownership, payments, and compliance'
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: 'Access your business data from anywhere, anytime'
  },
  {
    icon: Layers,
    title: 'Smart Integration',
    description: 'Seamlessly connects all three pillars with unified blockchain'
  }
]

const ChainFoundation = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-chitty-gray/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built on <span className="text-gradient">ChittyChain</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The blockchain foundation that powers trust, transparency, and automation across your entire business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-chitty-orange/10 rounded-2xl mb-4">
                <feature.icon className="w-8 h-8 text-chitty-orange" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Chain visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-chitty-black rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-chitty-orange/5 to-transparent" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Not Just Blockchain,
                <br />
                <span className="text-gradient">Trust Infrastructure</span>
              </h3>
              <p className="text-gray-400 mb-6">
                ChittyChain isn't about cryptocurrency or speculation. It's about creating 
                an unbreakable foundation of trust for real business operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-chitty-orange rounded-full mr-3" />
                  Smart contracts automate complex workflows
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-chitty-orange rounded-full mr-3" />
                  Transaction facts stored permanently
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-chitty-orange rounded-full mr-3" />
                  Progressive decentralization as you grow
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-chitty-orange/20 to-chitty-orange/5 p-8">
                <div className="h-full flex items-center justify-center">
                  <div className="relative">
                    {/* Animated chain links */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-32 h-32 border-4 border-chitty-orange/30 rounded-full" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-24 h-24 border-4 border-chitty-orange/50 rounded-full" />
                    </motion.div>
                    <div className="w-16 h-16 bg-chitty-orange rounded-full flex items-center justify-center">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChainFoundation