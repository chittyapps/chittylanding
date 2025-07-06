import { motion } from 'framer-motion'
import { Brain, Users, Sparkles, Rocket, Shield, BarChart } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Executive AI agents handle complex tasks while you focus on strategy',
    details: ['AI CFO for financial insights', 'Legal AI for contract analysis', 'Smart automation everywhere']
  },
  {
    icon: Users,
    title: 'Built for Real Business',
    description: 'Not another crypto project - real tools for real companies',
    details: ['Invoice management', 'Bank reconciliation', 'Legal document handling']
  },
  {
    icon: Sparkles,
    title: 'Progressive Enhancement',
    description: 'Start simple, scale to blockchain when you need it',
    details: ['Use familiar tools', 'Add chain features gradually', 'No crypto knowledge required']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with blockchain immutability',
    details: ['End-to-end encryption', 'Role-based access', 'Audit trail on-chain']
  },
  {
    icon: BarChart,
    title: 'Unified Analytics',
    description: 'See your entire business in one intelligent dashboard',
    details: ['Real-time insights', 'Predictive analytics', 'Custom reporting']
  },
  {
    icon: Rocket,
    title: 'Future-Proof Stack',
    description: 'Built on cutting-edge technology that grows with you',
    details: ['React & TypeScript', 'Cloudflare edge computing', 'OpenAI integration']
  }
]

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why Choose <span className="text-gradient">Chitty</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not building another blockchain. We're building the future of business operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-chitty-gray/50 backdrop-blur-sm rounded-2xl p-6 border border-chitty-gray-light hover:border-chitty-orange/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-chitty-orange/10 rounded-xl flex items-center justify-center group-hover:bg-chitty-orange/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-chitty-orange" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start">
                          <div className="w-1 h-1 bg-chitty-orange rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Join the future of business operations. Start with ChittyFinance today and unlock the full ecosystem as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://chittyfinance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-chitty-orange hover:bg-chitty-orange-dark transition-colors rounded-lg font-semibold text-lg inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <Rocket className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="mailto:hello@chitty.cc"
                className="px-8 py-4 border-2 border-chitty-gray-light hover:border-chitty-orange/50 transition-colors rounded-lg font-semibold text-lg text-gray-300 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features