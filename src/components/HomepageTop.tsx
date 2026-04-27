import heroMain from '../assets/images/hero-main.svg';
import heroSecondary from '../assets/images/hero-secondary.svg';
import accentTop from '../assets/images/hero-accent-top.svg';
import accentBottom from '../assets/images/hero-accent-bottom.svg';

const HomepageTop = () => {
  return (
    <section className="hero-section">
      {/* Decorative corner accents */}
      <img
        className="hero-accent-top"
        src={accentTop}
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero-accent-bottom"
        src={accentBottom}
        alt=""
        aria-hidden="true"
      />

      <div className="container hero-content">
        <div className="row align-items-center">
          {/* Left column – text */}
          <div className="col-lg-6">
            <p className="hero-tagline">
              <span className="brand-highlight">Love Quilts USA </span>
              Providing
            </p>

            <h1 className="hero-heading">
              Warmth and Comfort for Brave Kids
            </h1>

            <div className="hero-actions">
              <a href="#request" className="btn-hero-primary">
                Request a Quilt &rarr;
              </a>
              <a href="#volunteer" className="btn-hero-secondary">
                Become A Volunteer
              </a>
            </div>

            <div className="d-flex align-items-start gap-3 mt-3">
              <span className="hero-star" aria-hidden="true">&#10022;</span>
              <p className="hero-description">
                A nonprofit organization dedicated to handmade quilts for
                children with life-threatening illnesses.
              </p>
            </div>
          </div>

          {/* Right column – images */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="hero-images">
              <img
                className="hero-img-main"
                src={heroMain}
                alt="Child receiving a handmade quilt"
              />
              <img
                className="hero-img-secondary"
                src={heroSecondary}
                alt="Volunteer stitching a quilt"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageTop;
