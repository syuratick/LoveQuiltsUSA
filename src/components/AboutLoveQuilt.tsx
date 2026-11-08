import headerImg from '../assets/images/header.png';
import aboutUsImg from '../assets/images/Aboutus.svg';
import quiltDesk from '../assets/images/quilt-desk.svg';
import heartsHands from '../assets/images/hearts-hands.svg';

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

            {/* <p>
              If you would like more information, please email Nezzy at{' '}
              <a href="mailto:nezzylq@gmail.com" className="about-email">
                nezzylq@gmail.com
              </a>
            </p> */}
            <br/>
          </div>

          <div className="about-image-panel">
            <img src={aboutUsImg} alt="A child holding a handmade quilt" />
            
          </div>
        </div>
        {/* Jackie Bennett memorial */}
      <div className="memorial-section">
        {/* <div className="memorial-torn-edge"></div> */}
        <div className="container position-relative py-5">
          <div className="row">
            {/* Left decorative image */}
            <div className="col-lg-2 d-none d-lg-flex align-items-end">
              <img
                className="memorial-decor-left"
                src={quiltDesk}
                alt=""
                aria-hidden="true"
              />
            </div>

            {/* Center content */}
            <div className="col-lg-8 text-center">
              <h2 className="memorial-name">Jackie Bennett</h2>

              <p className="memorial-message">
                It is with a <strong>broken heart</strong> that I share we have{' '}
                <strong>lost dear</strong> our friend{' '}
                <span className="text-gold">Jackie Bennett</span>. She{' '}
                <span className="text-gold">passed</span> away on{' '}
                <span className="text-gold">5/3/2022</span>. Please remember
                her family and friends as we come to terms with this sudden
                loss. She will be truly missed as she was the driving force for{' '}
                <span className="text-gold">Love Quilts USA</span>. We will
                continue to carry on <strong>her legacy</strong>.
              </p>

              <p className="memorial-sub">
                I will be picking up the torch and will be the contact person
                from this point forward
              </p>

              <div className="memorial-contact">
                <span className="memorial-contact-label">
                  You can reach me at
                </span>
                <a href="mailto:nezzylq@gmail.com" className="btn-email">
                  nezzylq@gmail.com &rarr;
                </a>
              </div>

              <p className="memorial-thanks">
                Thanks for you patience and understanding
              </p>
            </div>

            {/* Right decorative image */}
            <div className="col-lg-2 d-none d-lg-flex align-items-end justify-content-end">
              <img
                className="memorial-decor-right"
                src={heartsHands}
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
};

export default AboutLoveQuilt;
