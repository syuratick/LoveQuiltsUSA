import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ChildDetail from './components/ChildDetail';
import AboutLoveQuilt from './components/AboutLoveQuilt';
import GalleryPage from './components/GalleryPage';
import SignUpPage from './components/SignUpPage';
import DirectionsForStitchers from './components/DirectionsForStitchers';
import GuidelinesForParents from './components/GuidelinesForParents';
import MailingDonations from './components/MailingDonations';
import RequestQuiltPage from './components/RequestQuiltPage';
import ContactSection from './components/ContactSection';
import LoginPage from './components/LoginPage';
import ChildBioForm from './components/ChildBioForm';

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header isAuthenticated={isAdminAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/child/:year/:id" element={<ChildDetail />} />
        <Route path="/about" element={<AboutLoveQuilt />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/directions" element={<DirectionsForStitchers />} />
        <Route path="/guidelines" element={<GuidelinesForParents />} />
        <Route path="/mailing" element={<MailingDonations />} />
        <Route path="/request-quilt" element={<RequestQuiltPage />} />
        <Route path="/contact" element={<ContactSection/>} />
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={() => setIsAdminAuthenticated(true)} />}
        />
        <Route
          path="/admin/child/new"
          element={isAdminAuthenticated ? <ChildBioForm /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/admin/child/edit/:id"
          element={isAdminAuthenticated ? <ChildBioForm /> : <Navigate to="/login" replace />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
