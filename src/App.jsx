import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Facilities from './pages/Facilities'
import Milestones from './pages/Milestones'
import PatientInfo from './pages/PatientInfo'
import OcularistCentre from './pages/OcularistCentre'
import CorneaCentre from './pages/CorneaCentre'
import ContactUs from './pages/ContactUs'
import CorneaTransplant from './pages/CorneaTransplant'
import ScrollToTop from './components/ScrollToTop'
import GlobalEyeBackground from './components/GlobalEyeBackground'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="bg-pattern" style={{ position: 'fixed', zIndex: 0, inset: 0, pointerEvents: 'none' }} />
      <GlobalEyeBackground />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/patient-information" element={<PatientInfo />} />
          <Route path="/ocularist-centre" element={<OcularistCentre />} />
          <Route path="/cornea-centre" element={<CorneaCentre />} />
          <Route path="/cornea-transplant" element={<CorneaTransplant />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
