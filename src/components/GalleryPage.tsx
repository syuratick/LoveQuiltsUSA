import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getRecipients, type Recipient } from '../util/LoveQuiltAPI';
import { formatDate, years } from '../util/Common';
import topBanner from '../assets/images/top-banner.svg';

const GalleryPage = () => {
  const currentYear = new Date().getFullYear();
  const [searchParams] = useSearchParams();
  const yearFromQuery = parseInt(searchParams.get('year') || String(currentYear), 10);

  const [activeYear, setActiveYear] = useState(yearFromQuery);
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sync active year if query param changes
  useEffect(() => {
    setActiveYear(yearFromQuery);
  }, [yearFromQuery]);

  const fetchData = async (year: number) => {
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
    fetchData(activeYear);
  }, [activeYear]);

  const handleYearClick = (year: number) => {
    setActiveYear(year);
  };

  return (
    <main className="gallery-page">
      {/* Banner */}
      <div className="gallery-page-banner">
        <img
          className="gallery-page-banner-img"
          src={topBanner}
          alt="Wall of Courage banner"
        />
        <div className="gallery-page-banner-overlay">
          <h1 className="gallery-page-banner-title">
            Our Wall of Courage: Meet the {activeYear} Recipients.
          </h1>
        </div>
      </div>

      {/* Notice bar */}
      <div className="gallery-page-notice">
        <p className="gallery-page-notice-title">
          New Quilts Open On The First Of Each Month. Please Be Sure To Check Back Then.
        </p>
        <p className="gallery-page-notice-sub">
          Please check back on the 1st of each month to see new children added to our list.
        </p>
      </div>

      {/* Cards grid */}
      <div className="container py-5">
        {loading && (
          <div className="text-center py-5">
            <p className="text-muted">Loading...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-5">
            <p className="text-danger">{error}</p>
          </div>
        )}

        {!loading && !error && recipients.length > 0 && (
          <div className="row g-4">
            {recipients.map((child) => (
              <div className="col-lg-4 col-md-6" key={child.id}>
                <div className="gallery-card">
                  <div className="gallery-card-img">
                    {child.profilePicture ? (
                      <img src={child.profilePicture} alt={child.name} />
                    ) : (
                      <div className="gallery-card-img-placeholder">
                        <span>Photo</span>
                      </div>
                    )}
                    <span className="gallery-card-theme">{child.theme}</span>
                  </div>

                  <div className="gallery-card-body">
                    <h4 className="gallery-card-name">{child.name}</h4>

                    <p className="gallery-card-label">Diagnosis:</p>
                    <p className="gallery-card-value">{child.diagnosis}</p>

                    <div className="gallery-card-dates">
                      <div>
                        <p className="gallery-card-label">Due Date</p>
                        <p className="gallery-card-date">
                          &#128197; {formatDate(child.dueDate)}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/child/${activeYear}/${child.id}`}
                      className="btn-gallery-see-more"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && recipients.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No recipients found for {activeYear}.</p>
          </div>
        )}
      </div>

      {/* Past years section */}
      <div className="gallery-past-years">
        <div className="container py-5">
          <h2 className="gallery-past-years-heading">
            Looking for a specific quilt from years past?
          </h2>
          <p className="gallery-past-years-text">
            While our focus is on the brave children currently in treatment, we take great pride in our history of comfort.
            Over the years, our community has stitched thousands of squares, creating a lasting impact one year at a time.
          </p>

          <div className="gallery-year-grid">
            {years.map((year) => (
              <button
                key={year}
                className={`gallery-year-btn ${activeYear === year ? 'active' : ''}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
