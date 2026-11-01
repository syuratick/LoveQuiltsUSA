import childQuilt from '../assets/images/child-quilt.svg';

const cards = [
  {
    title: 'Children Supported',
    text: 'Each quilt represents a child reminded that they are cared for, valued, and not alone during an incredibly difficult journey.',
    cta: 'Read More',
    href: '#children',
  },
  {
    title: 'Quilts Delivered',
    text: 'Handmade quilts lovingly created and gifted to children facing life-threatening illnesses, offering comfort during hospital stays and recovery at home.',
    cta: 'View Gallery',
    href: '#gallery',
  },
  {
    title: 'Volunteers Engaged',
    text: 'A community of compassionate volunteers who donate their time, skills, and hearts to make every quilt special.',
    cta: 'Meet Our Team',
    href: '#team',
  },
];

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container py-5">
        <div className="row">
          {/* Left – large child image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="mission-image-wrapper">
              <img
                className="mission-img"
                src={childQuilt}
                alt="Child wrapped in a handmade quilt"
              />
              {/* Decorative gold swoosh */}
              <div className="mission-swoosh" aria-hidden="true"></div>
            </div>
          </div>

          {/* Right – heading + cards */}
          <div className="col-lg-7">
            <h2 className="mission-heading">Love Quilts USA</h2>
            <p className="mission-intro">
              At Love Quilts USA, our volunteers create handmade quilts that
              bring comfort, warmth, and emotional support to children facing
              life-threatening illnesses.
            </p>

            <div className="mission-cards">
              {cards.map((card) => (
                <div className="mission-card" key={card.title}>
                  <h3 className="mission-card-title">{card.title}</h3>
                  <p className="mission-card-text">{card.text}</p>
                  <a href={card.href} className="btn-mission">
                    {card.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
