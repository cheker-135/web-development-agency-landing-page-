import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AgencySection from "../components/sections/AgencySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FooterSection from "../components/sections/FooterSection";
import ContactSection from "../components/sections/ContactSection";
import stepsImg from "../images/proges-logo.jpeg";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleGetStarted = () => {
    // Scroll to the contact section
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Provide The Best Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📱",
                title: "Mobile App Development",
                description:
                  "Create mobile applications with a user-friendly interface and seamless functionality to engage your customers.",
              },
              {
                icon: "🌐",
                title: "Website Development & Maintenance",
                description:
                  "Develop and maintain robust websites with custom features, regular updates, and performance optimizations.",
              },
              {
                icon: "🎨",
                title: "Web Design",
                description:
                  "Design visually captivating websites with a focus on user experience to convert visitors into loyal customers.",
              },
              {
                icon: "🚀",
                title: "Web Deployment",
                description:
                  "Deploy websites and apps using reliable strategies that ensure scalability, security, and top-notch performance.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={stepsImg}
                alt="Solutions Illustration"
                className="w-full h-auto rounded-[30%]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Simple Solutions!</h2>
              <div className="space-y-6">
                {[
                  { number: 1, title: "Contact us", description: "Reach out to discuss your needs" },
                  { number: 2, title: "Consult", description: "We analyze your requirements" },
                  { number: 3, title: "Place order", description: "Choose your perfect solution" },
                  { number: 4, title: "Payment", description: "Secure and flexible payment options" },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-sky-500/75 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-x-4">
                <button
                  onClick={handleGetStarted}
                  className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-sky-500/75 transition-colors"
                >
                  Get Started
                </button>
                <button
                  onClick={toggleModal}
                  className="border border-sky-500/75 text-indigo-500 px-6 py-2 rounded-full hover:bg-sky-500/75 hover:text-white transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AgencySection />
      <TestimonialsSection />
      <ContactSection />

      {/* CTA Section */}
      <section className="bg-sky-500/50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to get started?</h2>
          <button className="bg-white text-sky-500/100 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>

      <FooterSection />

      {/* Modal for Read More */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg max-w-lg sm:max-w-xl w-full">
            <h3 className="text-2xl font-semibold mb-4">How to Place an Order</h3>
            <p className="text-gray-600 mb-4">
              Placing an order with PROGES is simple! Follow these steps:
            </p>
            <ul className="text-gray-600 mb-4">
              <li>1. Contact us to discuss your project requirements.</li>
              <li>2. We will analyze your needs and suggest the best solutions.</li>
              <li>3. Choose your ideal service package.</li>
              <li>4. Make the secure payment using flexible options.</li>
            </ul>
            <p className="text-gray-600">
              Once the payment is complete, our team will get started on your project to deliver top-notch web and mobile solutions tailored to your business.
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
    </div>
  );
};

export default Index;
