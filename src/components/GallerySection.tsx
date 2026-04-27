import { useState, useRef } from 'react';

interface ChildCard {
  id: string;
  name: string;
  location: string;
  quiltTheme: string;
  diagnosis: string;
  dateOfBirth: string;
  dueBirth: string;
  imageUrl?: string;
}

// Placeholder data – will be replaced with DB fetch
const sampleData: Record<number, ChildCard[]> = {
  2022: [
    {
      id: '1',
      name: 'Kayli R.',
      location: 'Ohio',
      quiltTheme: 'Paw Patrol',
      diagnosis:
        'Double outlet right ventricle, Ebsteins Anomaly, Tricuspid Atresia, Pulmonary vein stenosis',
      dateOfBirth: 'June 22, 2017',
      dueBirth: 'March 1, 2022',
    },
    {
      id: '2',
      name: 'Juliana M.',
      location: 'New Hampshire',
      quiltTheme: 'Moon & Stars',
      diagnosis: 'Dysphagiay & Hypotonia',
      dateOfBirth: 'June 1, 2018',
      dueBirth: 'March 1, 2022',
    },
    {
      id: '3',
      name: 'Ellie P.',
      location: 'New Jersey',
      quiltTheme: 'Moon & Stars',
      diagnosis: 'Dysphagiay & Hypotonia',
      dateOfBirth: 'June 1, 2018',
      dueBirth: 'March 1, 2022',
    },
    {
      id: '4',
      name: 'Colton H.',
      location: 'South Carolina',
      quiltTheme: 'Red, White & Blue',
      diagnosis: 'ALL',
      dateOfBirth: 'December 22, 2016',
      dueBirth: 'March 1, 2022',
    },
    {
      id: '5',
      name: 'Indie F.',
      location: 'Oregon',
      quiltTheme: 'B-Cell ALL',
      diagnosis: 'Realistic Exotic Birds',
      dateOfBirth: 'May 22, 2017',
      dueBirth: 'March 1, 2022',
    },
    {
      id: '6',
      name: 'Elijah S.',
      location: 'Texas',
      quiltTheme: 'Mickey Mouse Clubhouse',
      diagnosis: 'Hypoplastic Left Heart Syndrome',
      dateOfBirth: 'January 11, 2019',
      dueBirth: 'March 1, 2022',
    },
  ],
};

const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

const GallerySection = () => {
  const [activeYear, setActiveYear] = useState(2022);
  const scrollRef = useRef<HTMLDivElement>(null);

  const children = sampleData[activeYear] ?? [];

  const handleYearClick = (year: number) => {
    setActiveYear(year);
    // TODO: fetch children from database by year
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
            Our quilts are made with hand-cross stitched squares that are sent
            to us by the greatest bunch of caring individuals from all over the
            world. The quilts are assembled by equally caring and devoted women.
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

        {/* Children grid */}
        {children.length > 0 ? (
          <div className="row g-4">
            {children.map((child) => (
              <div className="col-lg-4 col-md-6" key={child.id}>
                <div className="child-card">
                  {/* Image placeholder – will be replaced with DB images */}
                  <div className="child-card-img">
                    {child.imageUrl ? (
                      <img src={child.imageUrl} alt={`${child.name} from ${child.location}`} />
                    ) : (
                      <div className="child-card-img-placeholder">
                        <span>Photo</span>
                      </div>
                    )}
                    <span className="quilt-theme-tag">{child.quiltTheme}</span>
                  </div>

                  <div className="child-card-body">
                    <h4 className="child-card-name">
                      {child.name} {child.location}
                    </h4>

                    <p className="child-card-label">Diagnosis:</p>
                    <p className="child-card-value">{child.diagnosis}</p>

                    <div className="child-card-dates">
                      <div>
                        <p className="child-card-label">Date Of Birth</p>
                        <p className="child-card-value">
                          <span className="date-icon">&#128197;</span>{' '}
                          {child.dateOfBirth}
                        </p>
                      </div>
                      <div>
                        <p className="child-card-label">Due Birth</p>
                        <p className="child-card-value">
                          <span className="date-icon">&#128197;</span>{' '}
                          {child.dueBirth}
                        </p>
                      </div>
                    </div>

                    <a href={`#child-${child.id}`} className="btn-see-more">
                      See more &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">
              No children found for {activeYear}. Data will be loaded from the
              database.
            </p>
          </div>
        )}

        {/* See all button */}
        <div className="text-center mt-5">
          <a href="#all-children" className="btn-see-all">
            See all Children &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
