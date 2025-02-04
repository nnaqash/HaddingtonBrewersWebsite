import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet for SEO
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const json = JSON.stringify({
      ...formData,
      access_key: "b3739fb6-6922-4e3a-b343-33e0f4d8622b",
    });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Your message sent Successfully",
        icon: "success",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Haddington Brewers Basketball Club</title>
        <meta
          name="description"
          content="Get in touch with Haddington Brewers Basketball Club for inquiries, sponsorships, partnerships, and more. Reach out to our team today!"
        />
        <meta
          name="keywords"
          content="Contact Haddington Basketball, Basketball Team Contact, Local Sports Contact, Club Inquiry, Sponsorship, Support Team"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Haddington Brewers Basketball Club" />
        <meta property="og:title" content="Contact Us | Haddington Brewers Basketball Club" />
        <meta
          property="og:description"
          content="Reach out to Haddington Brewers Basketball Club for inquiries, sponsorship opportunities, and team-related questions."
        />
        <meta property="og:url" content="https://haddingtonbrewersbasketballclub.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Contact Form */}
      <section className="container mx-auto flex justify-center items-center text-customWhite px-4 md:px-0">
        <div className="w-full max-w-lg bg-customBlue py-6 px-6 rounded-lg shadow-green-800 m-7">
          <form onSubmit={onSubmit}>
            <h2 className="text-2xl md:text-4xl text-center mb-4">Contact Us</h2>

            {/* Full Name Field */}
            <div className="mt-7">
              <label className="block text-sm md:text-base mb-2">Full Name:</label>
              <input
                type="text"
                className="w-full h-12 md:h-14 border-red-800 outline-none rounded-lg p-3 md:p-4 text-sm md:text-lg text-black"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mt-7">
              <label className="block text-sm md:text-base mb-2">Email:</label>
              <input
                type="email"
                className="w-full h-12 md:h-14 border-red-800 outline-none rounded-lg p-3 md:p-4 text-sm md:text-lg text-black"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message Field */}
            <div className="mt-7">
              <label className="block text-sm md:text-base mb-2">Message:</label>
              <textarea
                name="message"
                className="w-full border-red-800 outline-none rounded-lg p-3 md:p-4 text-sm md:text-lg text-black h-40 md:h-64"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-12 md:h-14 bg-customRed text-customWhite rounded-md cursor-pointer text-sm md:text-lg font-medium mt-6 w-full hover:bg-customWhite hover:text-customRed"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
