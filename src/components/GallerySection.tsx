import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipients, type Recipient } from '../util/LoveQuiltAPI';
import { formatDate } from '../util/Common';
import { years } from '../util/Common';


const GallerySection = () => {
  const [activeYear, setActiveYear] = useState(2026);
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchRecipients = async (year: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRecipients(year);
      setRecipients(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setRecipients([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipients(activeYear);
  }, [activeYear]);

  const handleYearClick = (year: number) => {
    setActiveYear(year);
  };

  const scrollYears = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="gallery-section">
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="gallery-heading">
            Beautifully crafted quilts for children
            <br />
            with life-threatening illnesses
          </h2>
          <p className="gallery-subtitle">
            Our quilts are made with hand cross-stitched squares that are sent
            to us by the greatest bunch of caring individuals from all over the
            world. The quilts are assembled by equally caring and devoted women and men.
          </p>
        </div>

        {/* Year scroller */}
        <div className="year-scroller mb-5">
          <button
            className="year-scroll-btn"
            onClick={() => scrollYears('left')}
            aria-label="Scroll years left"
          >
            &#8249;
          </button>

          <div className="year-track" ref={scrollRef}>
            <div className="year-line" aria-hidden="true"></div>
            <div className="year-buttons">
              {years.map((year) => (
                <button
                  key={year}
                  className={`year-btn ${activeYear === year ? 'active' : ''}`}
                  onClick={() => handleYearClick(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <button
            className="year-scroll-btn"
            onClick={() => scrollYears('right')}
            aria-label="Scroll years right"
          >
            &#8250;
          </button>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-5">
            <p className="text-muted">Loading...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-5">
            <p className="text-danger">{error}</p>
          </div>
        )}

        {/* Children grid – show only first 3 */}
        {!loading && !error && recipients.length > 0 && (
          <div className="row g-4">
            {recipients.slice(0, 3).map((child) => (
              <div className="col-lg-4 col-md-6" key={child.id}>
                <div className="child-card">
                  {/* Image placeholder – will be replaced with DB images */}
                  <div className="child-card-img">
                    {child.profilePicture ? (
                      <img
                        src={child.profilePicture}
                        alt={`${child.name}`}
                      />
                    ) : (
                      <div className="child-card-img-placeholder">
                        <span>Photo</span>
                      </div>
                    )}
                    <span className="quilt-theme-tag">{child.theme}</span>
                  </div>

                  <div className="child-card-body">
                    <h4 className="child-card-name">{child.name}</h4>

                   {/*  <p className="child-card-label">Age:</p>
                    <p className="child-card-value">{child.age}</p>
 */}
                    <p className="child-card-label">Diagnosis:</p>
                    <p className="child-card-value">{child.diagnosis}</p>

                    {/* <p className="child-card-label">Color:</p>
                    <p className="child-card-value">{child.color}</p> */}

                    <div className="child-card-dates">
                      <div>
                        <p className="child-card-label">Due Date</p>
                        <p className="child-card-value">
                          <span className="date-icon">&#128197;</span>{' '}
                          {formatDate(child.dueDate)}
                        </p>
                      </div>
                      <div>
                        <p className="child-card-label">Signups</p>
                        <p className="child-card-value">
                          {child.numberOfSignups}
                        </p>
                      </div>
                    </div>

                    <Link to={`/child/${activeYear}/${child.id}`} className="btn-see-more">
                      See more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && recipients.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">
              No children found for {activeYear}.
            </p>
          </div>
        )}

        {/* See all button */}
        <div className="text-center mt-5">
          <Link to={`/gallery?year=${activeYear}`} className="btn-see-all">
            See all Children &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
