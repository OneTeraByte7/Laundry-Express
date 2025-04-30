const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 min-h-screen flex flex-col items-center text-center px-6">
      <h2 className="text-4xl font-bold mb-6 text-blue-900">Get in Touch</h2>
      <p className="max-w-xl text-gray-600 mb-10">
        Have any questions or need assistance? Contact us anytime. We’re here
        to help!
      </p>

      {/* Contact Details */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
        <p className="text-lg text-gray-700 mb-2">
          📧 Email: <span className="font-semibold">support@laundryexpress.com</span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          📞 Phone: <span className="font-semibold">+91 9873426783</span>
        </p>
        <p className="text-lg text-gray-700">
          🏢 Address: <span className="font-semibold">Phase 1 Hinjewadi, Pune, INDIA</span>
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-6 justify-center">
          <a href="https://example.com" className="text-blue-600 text-2xl hover:text-blue-800 transition">
            🌍 Website
          </a>
          <a href="https://facebook.com" className="text-blue-600 text-2xl hover:text-blue-800 transition">
            📘 Facebook
          </a>
          <a href="https://twitter.com" className="text-blue-600 text-2xl hover:text-blue-800 transition">
            🐦 Twitter
          </a>
          <a href="https://instagram.com" className="text-blue-600 text-2xl hover:text-blue-800 transition">
            📸 Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
