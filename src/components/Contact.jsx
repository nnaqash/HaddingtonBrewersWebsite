import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  // State to manage the values of the input fields
  const [formData, setFormData] = useState({
    name: '', // Initial value for the "name" field
    email: '', // Initial value for the "email" field
    message: '' // Initial value for the "message" field
  });

  // Function to handle changes in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure the field name and its value from the event
    setFormData((prevData) => ({
      ...prevData, [name]: value  // Spread the previous state to retain unchanged fields , Update the specific field (e.g., name, email, or message)
      
    }));
  };

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default browser behavior of refreshing the page on form submission

    // Prepare the data to be sent to the API by combining formData with the access key
    const json = JSON.stringify({
      ...formData, // Include all the form data (name, email, message)
      access_key: "b3739fb6-6922-4e3a-b343-33e0f4d8622b" // Add the API access key
    });

    // Send the form data to the API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST", // Specify the HTTP method
      headers: {
        "Content-Type": "application/json", // Indicate that we're sending JSON data
        Accept: "application/json" // Specify that we accept JSON responses
      },
      body: json // Attach the JSON payload in the request body
    }).then((res) => res.json()); // Parse the response as JSON

    // Check if the API response indicates success
    if (res.success) {
      // Display a success message using SweetAlert2
      Swal.fire({
        title: "Success", // Title of the popup
        text: "Your message sent Successfully", // Message content
        icon: "success" // Type of icon to display (success)
      });

      // Clear the form fields by resetting the state
      setFormData({
        name: '', // Reset the "name" field to an empty string
        email: '', // Reset the "email" field to an empty string
        message: '' // Reset the "message" field to an empty string
      });
    }
  };

  return (
    <section className="container mx-auto flex justify-center items-center text-customWhite px-4 md:px-0">
      {/* Form container with responsive width */}
      <div className="w-full max-w-lg bg-customBlue py-6 px-6 rounded-lg shadow-green-800 m-7">
        <form onSubmit={onSubmit}>
          {/* Form Heading */}
          <h2 className="text-2xl md:text-4xl text-center mb-4">Contact Us</h2>

          {/* Full Name Field */}
          <div className="mt-7">
            <label htmlFor="" className="block text-sm md:text-base mb-2">
              Full Name:
            </label>
            <input
              type="text"
              className="w-full h-12 md:h-14 border-red-800 outline-none rounded-lg p-3 md:p-4 text-sm md:text-lg text-black"
              placeholder="Enter Your Name"
              name="name" // Field name matches the key in the state
              value={formData.name} // Bind the input value to the corresponding state
              onChange={handleChange} // Call handleChange on any input change
              required // Make the field mandatory
            />
          </div>

          {/* Email Field */}
          <div className="mt-7">
            <label htmlFor="" className="block text-sm md:text-base mb-2">
              Email:
            </label>
            <input
              type="email"
              className="w-full h-12 md:h-14 border-red-800 outline-none rounded-lg p-3 md:p-4 text-sm md:text-lg text-black"
              placeholder="Enter Your Email"
              name="email" // Field name matches the key in the state
              value={formData.email} // Bind the input value to the corresponding state
              onChange={handleChange} // Call handleChange on any input change
              required // Make the field mandatory
            />
          </div>

          {/* Message Field */}
          <div className="mt-7">
            <label htmlFor="" className="block text-sm md:text-base mb-2">
              Message:
            </label>
            <textarea
              name="message" // Field name matches the key in the state
              className="w-full border-red-800 outline-none rounded-lg p-3 md:p-4 text-sm md:text-lg text-black h-40 md:h-64"
              placeholder="Enter Your Message"
              value={formData.message} // Bind the textarea value to the corresponding state
              onChange={handleChange} // Call handleChange on any input change
              required // Make the field mandatory
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="h-12 md:h-14 bg-customRed text-customWhite rounded-md cursor-pointer text-sm md:text-lg font-medium mt-6 w-full hover:bg-customGray"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
