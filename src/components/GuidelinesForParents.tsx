import { Link } from 'react-router-dom';
import headerImg from '../assets/images/header.png';
import childQuiltImg from '../assets/images/Support_Child.png';

const GuidelinesForParents = () => {
  return (
    <main className="directions-page">
      <div className="page-header-banner">
        <img src={headerImg} alt="" aria-hidden="true" className="page-header-img" />
        <div className="page-header-overlay">
          <h1 className="page-header-title">Guidelines for Parents</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="directions-content parents-guidelines-content">
          <p>
            Thank you for your interest in receiving a quilt from Love Quilts USA for your child. By
            submitting this form you are agreeing to allow Love Quilts USA to feature your child's
            picture and basic information on our site. Personal information such as your last name,
            address, email address, etc. will never be disclosed. Please note, the application form
            must be submitted by a parent or guardian.
          </p>

          <p>
            Once the application is received it will be reviewed to determine if the child fits all
            the requirements to receive a quilt. You will be notified at the email address you
            provide to us if your child is approved and you will be given an approximate time frame
            for the quilt to arrive. Please note, it typically takes 5-6 months for a quilt to be completed and delivered. 
            However, we often maintain a modest inventory of ready-made quilts that we may be able to deliver quickly depending on 
              the child's illness and theme requested.
          </p>

          <p>
            Although we will try our best to make a quilt for your child, not all children will be
            accepted. If you wish to be given additional information on our decision, please send an
            email to{' '}
            <a href="mailto:nezzylq@gmail.com" className="directions-link">
              nezzylq@gmail.com
            </a>{' '}
            and we will do our best to explain.
          </p>

          <div className="parents-guidelines-details">
            <section aria-labelledby="parents-limitations-title">
              <h2 id="parents-limitations-title">Our Limitations</h2>
              <ul className="parents-guidelines-list">
                <li>
                  <strong>AGE LIMITS 3-18:</strong> Do not apply if your child is under 3 or has
                  reached their 18th birthday.
                </li>
                <li>Child must live in the United States.</li>
                <li>
                  Child must be under treatment for a physical illness or condition which is life
                  threatening. If treatment for the condition is finished, a child can still qualify
                  if there are ongoing serious effects from either the condition or the treatment.
                </li>
                <li>
                  Child must have an active webpage (such as Facebook or Caringbridge.org) with
                  regular updates on the child's condition. A parent's Facebook may be used if it
                  gives regular info on the child.
                </li>
              </ul>

              <p>
                If you feel your child meets these guidelines please feel free to fill out the
                application form.
              </p>

              <h3>COMPLETING THE FORM:</h3>
              <p>
                All information is required unless it does not apply to your family. Please put N/A
                in the boxes that do not apply. This form must be complete to be considered for a
                quilt.{' '}
                <strong className="guideline-highlight">
                  Leaving any boxes blank will cause the application to not submit properly.
                </strong>{' '}
                Any questions can be emailed to us at
              </p>
              <a href="mailto:nezzylq@gmail.com" className="parents-guidelines-email-button">
                nezzylq@gmail.com
              </a>
            </section>

            <img
              src={childQuiltImg}
              alt="A child showing her quilt"
              className="parents-guidelines-image"
            />
          </div>

          <p>
            No information will be posted on the Love Quilts USA website with the exception of the
            first name and last initial of the child, home state, the
            main diagnosis of the illness and the biography. All other info will be kept private and
            only shared with those that will be finishing and mailing the quilt to your child. If the
            parent wishes the child's website to be listed on their Love Quilts USA page, permission
            must be emailed to{' '}
            <a href="mailto:nezzylq@gmail.com" className="directions-link">
              nezzylq@gmail.com
            </a>
            . If no permission is given the website will not be listed.
          </p>

          <p>
            We understand that your child and family must be your top priority, and that there might
            be some delays in communicating with us. Having said that, we can not go forward with
            planning and production of your child's quilt until we have all the information we need
            from you. Lack of communication can and will lead to the quilt being delayed. Once you
            submit the application, you should expect ... <strong>and watch for</strong> ... emails
            from{' '}
            <a href="mailto:nezzylq@gmail.com" className="directions-link">
              nezzylq@gmail.com
            </a>. </p>
          <p>
            Once we ship the quilt to you, the delivery <strong>must be signed for</strong> when it
            arrives.
          </p>
          <p>Please help us make this gift happen for your child. Thank you for understanding.</p>
        </div>

        <div className="mt-4">
          <Link to="/" className="directions-back">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GuidelinesForParents;
