import { Link } from 'react-router-dom';
import headerImg from '../assets/images/header.png';

const MailingDonations = () => {
  return (
    <main className="directions-page">
      <div className="page-header-banner">
        <img src={headerImg} alt="" aria-hidden="true" className="page-header-img" />
        <div className="page-header-overlay">
          <h1 className="page-header-title">Mailing &amp; Donation Information</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="directions-content mailing-donations-content">
          <p>All squares are to be mailed to:</p>

          <p className="mailing-donations-address">
            <svg
              className="mailing-donations-location-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <strong>Carolyn Pearson 806 Waverly Rd. Middleboro, MA 02346</strong>
          </p>

          <p>
            Copy and paste the email below to contact Carolyn
            <br />
            <a href="mailto:cnevillepearson@gmail.com" className="directions-link">
              cnevillepearson@gmail.com
            </a>
          </p>

          <p>
            If possible please add{' '}
            <strong className="mailing-donations-highlight">$5.00</strong> with each square to
            help cover the cost of putting the quilt together and postage to mail it to the child.
          </p>

          <p>
            Do NOT send a check made out to Love Quilts USA. We don't maintain a bank account so
            those checks cannot be cashed. If you are sending your donation by check, please leave
            the Payee area blank.
          </p>

          <p>
            Donations may be made at <strong className="mailing-donations-highlight">PayPal</strong>{' '}
            to{' '}
            <a
              href="mailto:inez1952@hotmail.com"
              className="mailing-donations-highlight directions-link"
            >
              inez1952@hotmail.com
            </a>
          </p>

          <p>
            If you mark your donation as{' '}
            <strong className="mailing-donations-highlight">"Sending to a friend"</strong>, PayPal
            will not take a fee and{' '}
            <strong className="mailing-donations-highlight">LQUSA</strong> will receive the entire
            amount.
          </p>

          <p>
            Please be sure to include a note with the child's name the square was stitched for,
            your name, and email address. Also indicate if the square has been washed.
          </p>

          <p>
            <strong className="mailing-donations-highlight">Thanks!!</strong>
          </p>
        </div>

        <div className="mt-4 text-left">
          <Link to="/" className="directions-back">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MailingDonations;
