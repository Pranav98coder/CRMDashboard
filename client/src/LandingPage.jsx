import Navbar from './Navbar';
import HeroSection  from './components/LandingPage/HeroSection';
import DashboardPreview from './components/LandingPage/DashboardPreview';
import Features from './components/LandingPage/Features';
import UserRoles from './components/LandingPage/UserRoles';
import CTA from './components/LandingPage/CTA';
import Footer from './components/LandingPage/Footer';

const LandingPage = () => (
  <>
    <Navbar />
    <HeroSection />
    <DashboardPreview />
    <Features />
    <UserRoles />
    <CTA />
    <Footer />
  </>
);

export default LandingPage;
