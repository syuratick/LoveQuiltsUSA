import { useState } from 'react';
import testimonialImg from '../assets/images/testimonial-knitting.svg';

interface Testimonial {
  id: number;
  category: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    category: 'For Parents',
    quote:
      'Being a part of Love Quilts USA has changed my life just as much as it impacts the children. Every square I stitch is filled with my best wishes and hope for a child I may never meet, but I feel deeply connected to their journey. The process of seeing individual squares come together from all over the country into one masterpiece of hope is truly magical.',
    name: 'Sarah M',
    role: 'Mother',
    image: testimonialImg,
  },
  {
    id: 2,
    category: 'For Volunteers',
    quote:
      'Volunteering with Love Quilts USA has been one of the most rewarding experiences of my life. Knowing that each stitch I make brings comfort to a child in need fills my heart with joy. The community of volunteers is incredibly supportive and inspiring.',
    name: 'Linda K',
    role: 'Volunteer',
    image: testimonialImg,
  },
  {
    id: 3,
    category: 'For Families',
    quote:
      'When our daughter received her quilt, she held it close and wouldn\'t let go. It meant the world to our family during such a difficult time. The love and care put into every square was evident, and it brought us so much comfort.',
    name: 'James R',
    role: 'Father',
    image: testimonialImg,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (direction: 'prev' | 'next') => {
    setCurrent((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      }
      return prev === testimonials.length - 1 ? 0 : prev + 1;
    });
  };

  const t = testimonials[current];

  return (
    <section className="testimonials-section">
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="testimonials-heading">Our Testimonials</h2>
          <p className="testimonials-subtitle">
            Our testimonials share heartfelt stories from people whose lives
            have been touched by our work. Their words reflect the trust,
            compassion, and real impact of our mission.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="row align-items-center justify-content-center">
          {/* Left – image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="testimonial-image-wrapper">
              <span className="testimonial-quote-badge" aria-hidden="true">
                &#10078;&#10078;
              </span>
              <img
                className="testimonial-img"
                src={t.image}
                alt={`${t.name}, ${t.role}`}
              />
            </div>
          </div>

          {/* Right – quote card */}
          <div className="col-lg-6">
            <div className="testimonial-card">
              <p className="testimonial-category">
                &ldquo;{t.category}&rdquo;
              </p>
              <hr className="testimonial-divider" />
              <p className="testimonial-quote">{t.quote}</p>

              <div className="testimonial-author">
                <span
                  className="testimonial-author-badge"
                  aria-hidden="true"
                >
                  &#10078;&#10078;
                </span>
                <div>
                  <span className="testimonial-name">{t.name} /</span>{' '}
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="testimonial-nav">
              <button
                className="testimonial-nav-btn"
                onClick={() => goTo('prev')}
                aria-label="Previous testimonial"
              >
                &#8249;
              </button>
              <button
                className="testimonial-nav-btn"
                onClick={() => goTo('next')}
                aria-label="Next testimonial"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
