import { Link } from 'react-router-dom';

const MailingDonations = () => {
  return (
    <main className="directions-page">
      <div className="container py-5">
        <h1 className="directions-heading">Mailing &amp; Donation Information</h1>

        <div className="directions-content text-center">
          <p>
            All squares are to be mailed to:<br />
            (New Address)
          </p>

          <p>
            <strong>Carolyn Pearson</strong><br />
            <strong>806 Waverly Rd.</strong><br />
            <strong>Middleboro, MA 02346</strong>
          </p>

          <p style={{ color: '#c0392b', fontWeight: 600 }}>
            Copy and paste the email below to contact Carolyn
          </p>
          <p>
            <a href="mailto:cnevillepearson@gmail.com" className="directions-link">
              cnevillepearson@gmail.com
            </a>
          </p>

          <p>
            If possible please add $5.00 with each square to help cover the cost of putting the
            quilt together and postage to mail it to the child.
          </p>

          <p>
            Do NOT send a check made out to Love Quilts USA. We don't maintain a bank account so
            those checks cannot be cashed. If you are sending your donation by check, please leave
            the Payee area blank.
          </p>

          <p>
            Donations may be made at <strong>PayPal</strong> to inez1952@hotmail.com
          </p>

          <p>
            If you mark your donation as "Sending to a friend", PayPal will not take a fee and
            LQUSA will receive the entire amount.
          </p>

          <p>
            Please be sure to include a note with the child's name the square was stitched for,
            your name, and email address. Also indicate if the square has been washed.
          </p>

          <p><strong>Thanks!!</strong></p>
        </div>

        <div className="mt-4 text-center">
          <Link to="/" className="directions-back">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MailingDonations;
