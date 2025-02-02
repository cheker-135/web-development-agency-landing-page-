import React, { useState } from 'react';
import AgencyImg from "../../images/agency.jpg";


const AgencySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">About Our Agency</h2>
            <p className="text-gray-600 mb-8">
              We specialize in delivering innovative web and mobile development solutions that help businesses grow. Our team works closely with you to turn your ideas into high-performing, scalable digital products.
            </p>
            <button
              onClick={toggleModal}
              className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-sky-500/75 hover:text-white transition-colors"
            >
              Learn More
            </button>
          </div>
          <div className="animate-fadeIn">
            <img
              src={AgencyImg}
              alt="Agency Illustration"
              className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">PROGES Agency</h3>
            <p className="text-gray-600 mb-4">
              PROGES is an agency specialized in web development with over 10 years of experience in mobile and web development. Founded by Iyaadh Chebbi, we are proud of our highly skilled team of experts, including:
            </p>
            <ul className="text-gray-600 mb-4">
              <li>Experienced Web Designers</li>
              <li>SEO Experts</li>
              <li>Frontend Developers</li>
              <li>Backend Developers</li>
              <li>Database Engineers</li>
            </ul>
            <p className="text-gray-600">
              Together, we provide innovative, high-quality digital solutions tailored to meet the unique needs of each client.
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={toggleModal}
                className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-sky-500/75"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AgencySection;
