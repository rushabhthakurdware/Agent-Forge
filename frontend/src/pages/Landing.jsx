import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeatureSection'
import HowItWorks from '../components/HowItWorks'
import TechStack from '../components/TechStack'
import AgentsSection from '../components/AgentSection'
import Footer from '../components/Footer'
export default function Landing() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TechStack />
        <AgentsSection />
        <Footer />
      </div>
    </div>
  )
}