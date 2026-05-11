import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ChildDetail from './components/ChildDetail';
import AboutLoveQuilt from './components/AboutLoveQuilt';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/child/:year/:id" element={<ChildDetail />} />
        <Route path="/about" element={<AboutLoveQuilt />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
