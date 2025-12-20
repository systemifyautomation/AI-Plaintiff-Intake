import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import PricingPage from './pages/PricingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import DocumentationPage from './pages/DocumentationPage'
import SupportPage from './pages/SupportPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </>
  )
}

export default App
