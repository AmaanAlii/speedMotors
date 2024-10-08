import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\+?[0-9\s]+$/.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Perform form submission logic here
      // For example, sending data to a backend API or service
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
    }
  };

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={`border-b-2 outline-none p-2 ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.fullName && (
          <span className="text-red-500 text-sm">{errors.fullName}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`border-b-2 outline-none p-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-1">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className={`border-b-2 outline-none p-2 ${
            errors.phoneNumber ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phoneNumber && (
          <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          className={`border-b-2 outline-none p-2 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Write your message.."
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className=" bg-sky-500 text-white py-2 px-6 rounded-lg hover:bg-sky-600"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
