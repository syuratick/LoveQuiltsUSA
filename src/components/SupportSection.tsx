import supportChild from '../assets/images/support-child.svg';
import quiltDesk from '../assets/images/quilt-desk.svg';
import heartsHands from '../assets/images/hearts-hands.svg';

const SupportSection = () => {
  return (
    <section className="support-section">
      {/* Dark support banner */}
      <div className="support-blue-bar"></div>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img
              className="support-img"
              src={supportChild}
              alt="Child crafting a quilt"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="support-heading">
              Supporting Your Family Through Every Stitch
            </h2>
            <p className="support-text">
              We understand the challenges your family is facing. Our mission is
              to offer a tangible symbol of comfort. To ensure every child
              receives a quilt made with the highest care and safety standards,
              please review our application guidelines
            </p>
            <a href="#guidelines" className="btn-guidelines">
              Read Full Guidelines &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Jackie Bennett memorial */}
      <div className="memorial-section">
        <div className="memorial-torn-edge"></div>
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
  );
};

export default SupportSection;
