import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs library
import ContactImg from "../../images/contact-us.jpg";
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields."); // Show error toast
      return;
    }

    // Use EmailJS to send the email
    emailjs
      .send(
        "your_service_id", // Replace with your Service ID
        "your_template_id", // Replace with your Template ID
        formData, // Pass the form data
        "your_user_id" // Replace with your User ID
      )
      .then(
        (response) => {
          toast.success("Your message has been sent successfully!"); // Success toast
          // Reset the form fields
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Something went wrong. Please try again."); // Error toast
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-sky-500/100 text-white px-6 py-2 rounded-full hover:bg-sky-500/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="animate-fadeIn">
            <img
              src={ContactImg}
              alt="Contact Illustration"
              className="w-full h-auto border-10 border-white rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
