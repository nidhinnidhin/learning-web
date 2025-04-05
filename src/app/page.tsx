import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your Future, Your <span>Program</span>
          </h1>
          <p>
            Find the right program that fits your goals! Work through our
            categories and discover your path.
          </p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Find degree or area of study or category"
            />
            <button type="button">Search</button>
          </div>
        </div>
        <div className="program-cards">
          <div className="card">
            <Image
              src="/medical.svg"
              alt="Medical & Healthcare"
              width={280}
              height={180}
            />
            <h3>Medical & Healthcare</h3>
          </div>
          <div className="card">
            <Image
              src="/engineering.svg"
              alt="Engineering & Technology"
              width={280}
              height={180}
            />
            <h3>Engineering & Technology</h3>
          </div>
          <div className="card">
            <Image
              src="/business.svg"
              alt="Business & Management"
              width={280}
              height={180}
            />
            <h3>Business & Management</h3>
          </div>
          <div className="card">
            <Image
              src="/vocational.svg"
              alt="Short-Term & Vocational"
              width={280}
              height={180}
            />
            <h3>Short-Term & Vocational</h3>
          </div>
        </div>
      </section>

      <section className="academic-opportunities">
        <div className="section-header">
          <h2>
            Explore Your Academic <span>Opportunities</span>
          </h2>
          <p>
            Explore diverse academic programs, each designed to enrich your
            education, broaden your perspective, and immerse you in new
            cultures.
          </p>
        </div>
        <div className="programs-grid">
          <div className="program-category">
            <h3>Undergraduate Programs</h3>
            <div className="duration">
              <Image
                src="/duration.svg"
                alt="Duration"
                width={16}
                height={16}
              />
              <span>Duration: 3-4 years</span>
            </div>
            <p>
              Bachelor's degree programs in various fields, such as business,
              engineering, arts and sciences
            </p>
            <ul>
              <li>Earn an internationally recognized degree</li>
              <li>Study at top universities worldwide</li>
              <li>Gain cultural and global exposure</li>
            </ul>
            <button className="more-details">+ More Details</button>
          </div>
          <div className="program-category">
            <h3>Graduate Programs</h3>
            <div className="duration">
              <Image
                src="/duration.svg"
                alt="Duration"
                width={16}
                height={16}
              />
              <span>Duration: 1-5 years</span>
            </div>
            <p>
              Master's and Ph.D. programs in specialized fields such as
              business, law, medicine, and engineering.
            </p>
            <ul>
              <li>Advance your career with a higher degree</li>
              <li>Learn from top faculty and industry experts</li>
              <li>Research opportunities in leading institutions</li>
            </ul>
            <button className="more-details">+ More Details</button>
          </div>
          <div className="program-category">
            <h3>Exchange Programs</h3>
            <div className="duration">
              <Image
                src="/duration.svg"
                alt="Duration"
                width={16}
                height={16}
              />
              <span>Duration: 3 months – 1 year</span>
            </div>
            <p>
              Short-term programs that allow students to study abroad for a
              semester or academic year.
            </p>
            <ul>
              <li>Experience different education systems</li>
              <li>Transfer credits to your home university</li>
              <li>Cultural exchange and networking</li>
            </ul>
            <button className="more-details">+ More Details</button>
          </div>
          <div className="program-category">
            <h3>Language Programs</h3>
            <div className="duration">
              <Image
                src="/duration.svg"
                alt="Duration"
                width={16}
                height={16}
              />
              <span>Duration: 2 weeks – 1 year</span>
            </div>
            <p>
              Programs that focus on language learning and cultural immersion.
            </p>
            <ul>
              <li>Learn from native-speaking instructors</li>
              <li>Practice in real-world environments</li>
              <li>Experience full cultural immersion</li>
            </ul>
            <button className="more-details">+ More Details</button>
          </div>
          <div className="program-category">
            <h3>Internship Programs</h3>
            <div className="duration">
              <Image
                src="/duration.svg"
                alt="Duration"
                width={16}
                height={16}
              />
              <span>Duration: 1 month – 1 year</span>
            </div>
            <p>Programs that combine study with practical work experience.</p>
            <ul>
              <li>Gain hands-on industry experience</li>
              <li>Build your international career network</li>
              <li>Boost employability with global exposure</li>
            </ul>
            <button className="more-details">+ More Details</button>
          </div>
          <div className="program-category">
            <h3>Pathway Programs</h3>
            <div className="duration">
              <Image
                src="/duration.svg"
                alt="Duration"
                width={16}
                height={16}
              />
              <span>Duration: 6 months – 2 years</span>
            </div>
            <p>
              Preparatory programs designed to help students transition into
              undergraduate or graduate studies.
            </p>
            <ul>
              <li>Improve academic and language skills</li>
              <li>Meet entry requirements for universities</li>
              <li>Smooth transition into degree programs</li>
            </ul>
            <button className="more-details">+ More Details</button>
          </div>
        </div>
      </section>

      <section className="medical-healthcare">
        <div className="section-content">
          <div className="section-image">
            <Image
              src="/medical.svg"
              alt="Medical & Healthcare"
              width={600}
              height={400}
            />
          </div>
          <div className="section-details">
            <h2>
              <span>Medical</span> & Health care
            </h2>
            <p>
              Looking to build a career in medicine and healthcare? Studying
              abroad gives you access to top universities, advanced facilities,
              and global career opportunities.
            </p>
            <h3>We offer programs in :</h3>
            <ul>
              <li>Medicine & Surgery (MBBS, MD, BDS)</li>
              <li>Nursing (BSc, MSc)</li>
              <li>Pharmacy (BPharm, PharmD)</li>
              <li>
                Allied Health Sciences (Physiotherapy, Radiology, Lab
                Technology)
              </li>
              <li>Public Health & Healthcare Management (MPH, MHA)</li>
              <li>Public Health & Healthcare Management (MPH, MHA)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="Engineering-Technology">
        <div className="section-content">
          <div className="section-details">
            <h2>
              <span>Engineering</span> & Technology
            </h2>
            <p>
              Want a career in engineering and technology? Study abroad for top
              universities, advanced labs, and global opportunities!
            </p>
            <h3>We offer programs in :</h3>
            <ul>
              <li>Computer Science & IT</li>
              <li>Mechanical Engineering</li>
              <li>Electrical & Electronics Engineering</li>
              <li>Civil & Structural Engineering</li>
              <li>Chemical & Environmental Engineering</li>
              <li>Biomedical Engineering</li>
            </ul>
          </div>
          <div className="section-image">
            <Image
              src="/engineering.svg"
              alt="Engineering & Technology"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="Business-Management">
        <div className="section-content">
          <div className="section-image">
            <Image
              src="/business.svg"
              alt="Business & Management"
              width={600}
              height={400}
            />
          </div>
          <div className="section-details">
            <h2>
              <span>Business</span> & Management
            </h2>
            <p>
              Want a successful business career? Study abroad for top universities, global
              networking, and industry-leading education!
            </p>
            <h3>We offer programs in :</h3>
            <ul>
              <li>Business Administration (BBA, MBA)</li>
              <li>Finance & Accounting</li>
              <li>Marketing & Digital Marketing</li>
              <li>Human Resource Management (HRM)</li>
              <li>Entrepreneurship & Innovation</li>
              <li>Supply Chain & Logistics Management</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
