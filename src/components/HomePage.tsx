import HomepageTop from './HomepageTop';
import SupportSection from './SupportSection';
import MissionSection from './MissionSection';
import GallerySection from './GallerySection';
import ParentsGuidelines from './ParentsGuidelines';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';

const HomePage = () => {
  return (
    <main>
      <HomepageTop />
      <SupportSection />
      <MissionSection />
      <GallerySection />
      <ParentsGuidelines />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default HomePage;
