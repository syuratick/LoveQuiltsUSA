import parentsSewing from '../assets/images/parents-sewing.svg';
import loveHeart from '../assets/images/love-heart.svg';
import { Link } from 'react-router-dom';

const ParentsGuidelines = () => {
  return (
    <section className="parents-section">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left – text */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="parents-heading">Parents' Guidelines</h2>

            <p className="parents-text">
              Thank you for your interest in receiving a quilt from Love Quilts
              USA for your child. By submitting this form you are agreeing to
              allow Love Quilts USA to feature your child's picture and basic
              information on our site. Personal information such as your last
              name, address, email address, etc. will never be disclosed. Please
              note, the application form must be submitted by a parent or
              guardian.
            </p>

            <p className="parents-text">
              Once the application is received it will be reviewed to determine
              if the child fits all the requirements to receive a quilt. You
              will be notified at the email address you provide to us if your
              child is approved and you will be given an approximate time frame
              for the quilt to arrive. Please note, it typically takes 5-6 months for a quilt to be completed and delivered. 
              However, we often maintain a modest inventory of ready-made quilts that we may be able to deliver quickly depending 
              on the child's illness and theme requested.
            </p>

            <Link to="/guidelines" className="btn-parents">
              See More Information for Parents &rarr;
            </Link>
          </div>

          {/* Right – image with heart accent */}
          <div className="col-lg-6">
            <div className="parents-image-wrapper">
              <img
                className="parents-heart-accent"
                src={loveHeart}
                alt=""
                aria-hidden="true"
              />
              <img
                className="parents-img"
                src={parentsSewing}
                alt="Parent and child using a sewing machine together"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsGuidelines;
