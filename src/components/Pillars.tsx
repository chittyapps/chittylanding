import { motion } from 'framer-motion'
import { Coins, FileText, Shield, Link } from 'lucide-react'

const pillars = [
  {
    title: 'ChittyAssets',
    icon: Coins,
    description: 'Transform physical assets into digital tokens with verifiable ownership and seamless transferability.',
    features: ['Asset Minting', 'Ownership Verification', 'Digital Provenance', 'NFT Integration'],
    gradient: 'from-amber-500 to-orange-500',
    status: 'In Development'
  },
  {
    title: 'ChittyFinance',
    icon: FileText,
    description: 'AI-powered financial management with real-time insights, automated bookkeeping, and intelligent reporting.',
    features: ['AI CFO Assistant', 'Bank Integration', 'Smart Invoicing', 'Real-time Analytics'],
    gradient: 'from-chitty-orange to-red-500',
    status: 'Live',
    link: 'https://chittyfinance.com'
  },
  {
    title: 'ChittyLegal',
    icon: Shield,
    description: 'Automate legal operations with AI agents, smart contracts, and blockchain-verified documentation.',
    features: ['Smart Contracts', 'Document Automation', 'AI Legal Agents', 'Compliance Tracking'],
    gradient: 'from-purple-500 to-pink-500',
    status: 'Beta'
  }
]

const Pillars = () => {
  return (
    <section id="pillars" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Three Pillars of <span className="text-gradient">Business Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each platform is powerful alone, but together they create an unstoppable business ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': pillar.gradient.split(' ')[1],
                  '--tw-gradient-to': pillar.gradient.split(' ')[3]
                } as any}
              />
              
              <div className="relative bg-chitty-gray border border-chitty-gray-light rounded-2xl p-8 h-full hover:border-chitty-orange/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <pillar.icon className="w-10 h-10 text-chitty-orange" />
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    pillar.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    pillar.status === 'Beta' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {pillar.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-400 mb-6">{pillar.description}</p>

                <ul className="space-y-2 mb-8">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-chitty-orange rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {pillar.link && (
                  <a
                    href={pillar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-chitty-orange hover:text-chitty-orange-light transition-colors"
                  >
                    Launch App
                    <Link className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 text-gray-400">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Coins className="w-8 h-8 text-amber-500" />
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-chitty-orange" />
            <div className="w-16 h-16 rounded-full bg-chitty-orange/20 flex items-center justify-center">
              <FileText className="w-8 h-8 text-chitty-orange" />
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-chitty-orange to-purple-500" />
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <p className="mt-6 text-gray-400">
            Seamlessly integrated for maximum business impact
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pillars