import Hero from './components/Hero'
import Pillars from './components/Pillars'
import ChainFoundation from './components/ChainFoundation'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-chitty-black">
      <Hero />
      <Pillars />
      <ChainFoundation />
      <Features />
      <Footer />
    </div>
  )
}

export default App