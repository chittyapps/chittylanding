import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    products: [
      { name: 'ChittyFinance', href: 'https://chittyfinance.com' },
      { name: 'ChittyAssets', href: '#', badge: 'Coming Soon' },
      { name: 'ChittyLegal', href: '#', badge: 'Beta' },
      { name: 'ChittyChain', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: 'mailto:hello@chitty.cc' }
    ],
    developers: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'GitHub', href: 'https://github.com/chitty' },
      { name: 'Status', href: '#' }
    ]
  }

  const socials = [
    { icon: Github, href: 'https://github.com/chitty' },
    { icon: Twitter, href: 'https://twitter.com/chitty' },
    { icon: Linkedin, href: 'https://linkedin.com/company/chitty' },
    { icon: Mail, href: 'mailto:hello@chitty.cc' }
  ]

  return (
    <footer className="bg-chitty-gray/50 border-t border-chitty-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              <span className="text-gradient">Chitty</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              The Web3 business operating system that transforms how companies manage assets, finances, and legal operations.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-chitty-black rounded-lg flex items-center justify-center text-gray-400 hover:text-chitty-orange hover:bg-chitty-orange/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Products</h4>
            <ul className="space-y-2">
              {links.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-chitty-orange transition-colors inline-flex items-center"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-chitty-orange/20 text-chitty-orange rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-chitty-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Developers</h4>
            <ul className="space-y-2">
              {links.developers.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-chitty-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-chitty-gray-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Chitty. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-chitty-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-chitty-orange transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-chitty-orange transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer