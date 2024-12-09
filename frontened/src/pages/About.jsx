import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-10">
          Welcome to our platform! We offer an extensive collection of online courses designed to enhance your skills and help you achieve your learning goals. Whether you’re a beginner or an advanced learner, our courses provide valuable insights and real-world applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to provide affordable, accessible, and high-quality education to anyone, anywhere. We aim to empower learners with the knowledge and skills to succeed in their personal and professional lives.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600">
              We offer a wide range of courses in various domains, including programming, design, marketing, and more. Our courses are designed by industry experts and include interactive lessons, hands-on projects, and certifications upon completion.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              We believe in the power of education to change lives. Our values are built on integrity, accessibility, innovation, and a commitment to lifelong learning.
            </p>
          </div>
        </div>

 {/* Our Team Section */}
 <section className="team-section bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="team-member bg-gray-200 p-6 rounded-lg w-72 text-center">
              <img src="/images/team1.jpg" alt="Team Member 1" className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>
            <div className="team-member bg-gray-200 p-6 rounded-lg w-72 text-center">
              <img src="/images/team2.jpg" alt="Team Member 2" className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>
            <div className="team-member bg-gray-200 p-6 rounded-lg w-72 text-center">
              <img src="/images/team3.jpg" alt="Team Member 3" className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Lead Instructor</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
