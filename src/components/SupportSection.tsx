import { Link } from 'react-router-dom';
import supportChild from '../assets/images/Support_Child.png';


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
            <Link to="/guidelines" className="btn-guidelines">
              Read Full Guidelines &rarr;
            </Link>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default SupportSection;
