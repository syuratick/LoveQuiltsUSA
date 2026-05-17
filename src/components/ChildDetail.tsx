import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipients, type Recipient } from '../util/LoveQuiltAPI';
import topBanner from '../assets/images/top-banner.svg';

const ChildDetail = () => {
  const { year, id } = useParams<{ year: string; id: string }>();
  const [child, setChild] = useState<Recipient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChild = async () => {
      setLoading(true);
      setError(null);
      try {
        const recipients = await getRecipients(Number(year));
        const found = recipients.find((r) => r.id === id);
        if (found) {
          setChild(found);
        } else {
          setError('Child not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    if (year && id) {
      fetchChild();
    }
  }, [year, id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (error || !child) {
    return (
      <div className="container py-5 text-center">
        <p className="text-danger">{error || 'Child not found'}</p>
        <Link to="/" className="btn-back-home">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="child-detail-page">
      {/* Hero banner */}
      <div className="child-detail-banner">
        <img
          className="child-detail-banner-img"
          src={topBanner}
          alt="Wall of Courage banner"
        />
        <div className="child-detail-banner-overlay">
          <h1 className="child-detail-banner-title">
            Our Wall of Courage: Meet the {year} Recipients.
          </h1>
        </div>
      </div>

      {/* Detail card */}
      <div className="container py-5">
        <div className="child-detail-card">
          <div className="row">
            {/* Left – info */}
            <div className="col-lg-7">
              <span className="child-detail-age-badge">
                {child.age} Years Old
              </span>

              <h2 className="child-detail-name">{child.name}</h2>

              <p className="child-detail-meta">
                <span className="meta-label">Theme:</span> {child.theme}
                &nbsp;&nbsp;
                <span className="meta-label">Favorite Colors:</span>{' '}
                {child.color}
              </p>
              <p className="child-detail-meta">
                <span className="meta-label">Diagnosis:</span>{' '}
                {child.diagnosis}
              </p>

              <div className="child-detail-dates">
                <div>
                  <p className="child-detail-date-label">Due Date</p>
                  <p className="child-detail-date-value">
                    &#128197; {child.dueDate}
                  </p>
                </div>
              </div>

              <div className="child-detail-actions">
                <a href="#signup" className="btn-detail-primary">
                  Sign Up &rarr;
                </a>
                <a href="#donate" className="btn-detail-secondary">
                  Make up a Donation Now &rarr;
                </a>
              </div>
            </div>

            {/* Right – image placeholder */}
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div className="child-detail-images">
                {child.imageUrl ? (
                  <img
                    className="child-detail-img"
                    src={child.imageUrl}
                    alt={child.name}
                  />
                ) : (
                  <div className="child-detail-img-placeholder">
                    <span>Photos coming from database</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Journey / Story section */}
        <div className="child-detail-story">
          <h3 className="child-detail-story-heading">
            {child.name.split('.')[0]}'s Journey
          </h3>
          <div className="child-detail-story-text">
            {child.story.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-4">
          <Link to="/" className="btn-back-home">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChildDetail;
