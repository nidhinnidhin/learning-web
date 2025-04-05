"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "I was nervous about studying abroad, but their team made it feel so easy. They guided me through every step—from choosing the right university to securing my visa. Now, I'm living my dream in Canada!",
    name: "Full Name",
    abroadChoice: "Canada",
    image: "/testimonial.png",
  },
  {
    id: 2,
    quote:
      "The application process seemed overwhelming at first, but with their expert guidance, I was able to navigate it smoothly. My experience studying in Australia has been life-changing!",
    name: "Jane Smith",
    abroadChoice: "Australia",
    image: "/testimonial.png",
  },
  {
    id: 3,
    quote:
      "Their personalized approach made all the difference. They helped me find a program that perfectly matched my career goals, and now I'm thriving in my studies abroad!",
    name: "John Davis",
    abroadChoice: "United Kingdom",
    image: "/testimonial.png",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your Future, Your <span>Program</span>
            <br /> Find It Today
          </h1>
          <p>
            Find the right program that fits your career goals. Browse through
            our categories and discover opportunities worldwide.
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
              src="/medical.png"
              alt="Medical & Healthcare"
              width={280}
              height={180}
            />
            <h3>Medical & Healthcare</h3>
          </div>
          <div className="card">
            <Image
              src="/engineering.png"
              alt="Engineering & Technology"
              width={280}
              height={180}
            />
            <h3>Engineering & Technology</h3>
          </div>
          <div className="card">
            <Image
              src="/business.png"
              alt="Business & Management"
              width={280}
              height={180}
            />
            <h3>Business & Management</h3>
          </div>
          <div className="card">
            <Image
              src="/vocational.png"
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
                src="/calender.png"
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
                src="/calender.png"
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
                src="/calender.png"
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
                src="/calender.png"
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
                src="/calender.png"
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
                src="/calender.png"
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
              src="/medical.png"
              alt="Medical & Healthcare"
              width={280}
              height={180}
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
            <ul className="program-list">
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
              src="/engineering.png"
              alt="Engineering & Technology"
              width={280}
              height={180}
            />
          </div>
        </div>
      </section>

      <section className="Business-Management">
        <div className="section-content">
          <div className="section-image">
            <Image
              src="/business.png"
              alt="Business & Management"
              width={280}
              height={180}
            />
          </div>
          <div className="section-details">
            <h2>
              <span>Business</span> & Management
            </h2>
            <p>
              Want a successful business career? Study abroad for top
              universities, global networking, and industry-leading education!
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

      <section className="Engineering-Technology">
        <div className="section-content">
          <div className="section-details">
            <h2>
              <span>Short-Term </span> & Vocational
            </h2>
            <p>
              Want industry-specific skills fast? Short-term programs abroad
              offer hands-on training and job-ready certifications!
            </p>
            <h3>We offer programs in :</h3>
            <ul>
              <li>Culinary Arts & Hospitality</li>
              <li>Fashion & Design</li>
              <li>Film & Media Studies</li>
              <li>Language & Communication</li>
              <li>Automotive & Mechanical Trades</li>
              <li>Health & Wellness</li>
            </ul>
          </div>
          <div className="section-image">
            <Image
              src="/vocational.png"
              alt="Engineering & Technology"
              width={280}
              height={180}
            />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-content">
          <div className="testimonial-stack">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === activeIndex
                    ? "active"
                    : index === (activeIndex + 1) % testimonials.length
                    ? "next-card"
                    : index === (activeIndex + 2) % testimonials.length
                    ? "third-card"
                    : "hidden-card"
                }`}
              >
                <h2>
                  See How Others Made It <span>Happen</span>
                </h2>
                <div className="testimonial-grid">
                  <div className="quote-container">
                    <button
                      className="nav-button prev"
                      aria-label="Previous testimonial"
                      onClick={handlePrevClick}
                    >
                      ← 
                    </button>

                    <div className="quote-content">
                      <blockquote>"{testimonial.quote}"</blockquote>
                    </div>
                  </div>

                  {/* Right side - Profile */}
                  <div className="profile-container">
                    <div className="testimonial-label">
                      <span>Testimonial</span>
                    </div>

                    <div className="profile-content">
                      <div className="profile-image-wrapper">
                        <div className="image-border"></div>
                        <div className="profile-image">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={160}
                            height={160}
                            objectFit="cover"
                          />
                        </div>
                      </div>

                      <div className="profile-details">
                        <div className="detail-item">
                          <div className="detail-label">Name</div>
                          <div className="detail-value">{testimonial.name}</div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-label">Abroad Choice</div>
                          <div className="detail-value">
                            {testimonial.abroadChoice}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="nav-button next"
                      aria-label="Next testimonial"
                      onClick={handleNextClick}
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
