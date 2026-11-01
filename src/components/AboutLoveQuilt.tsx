import headerImg from '../assets/images/header.png';
import aboutUsImg from '../assets/images/Aboutus.svg';

const AboutLoveQuilt = () => {
  return (
    <main className="about-page">
      <div className="page-header-banner">
        <img src={headerImg} alt="" aria-hidden="true" className="page-header-img" />
        <div className="page-header-overlay">
          <div className="page-header-text-wrap">
            <h1 className="page-header-title">Welcome to Love Quilts USA</h1>
            <p className="page-header-subtitle">
              Beautifully crafted quilts for children with life-threatening illnesses.
            </p>
          </div>
        </div>
      </div>

      <section className="about-intro">
        <div className="about-intro-inner">
          <div className="about-copy">
            <h2>Quilts Made With Love</h2>

            <p>
              Our quilts are made with hand cross-stitched squares that are sent to us by
              the greatest bunch of caring individuals from all over the world. The quilts
              are assembled by equally caring and devoted women and men.
            </p>

            <p>
              Please take time to look around and explore using the links provided on the
              left. Perhaps you'll be inspired to stitch one quilt square or many. Perhaps
              you'll decide to help us by assembling quilts. Or perhaps you have or know of
              a sick child who could benefit by being covered in the love these quilts
              provide. Our quilts are provided at no cost.
            </p>

            <p>
              If you would like more information, please email Nezzy at{' '}
              <a href="mailto:nezzylq@gmail.com" className="about-email">
                nezzylq@gmail.com
              </a>
            </p>
          </div>

          <div className="about-image-panel">
            <img src={aboutUsImg} alt="A child holding a handmade quilt" />
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutLoveQuilt;
