const HeroSection = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Main Heading */}
      <h1 className="text-6xl font-extrabold mb-6">
        🚀 90-Minute Laundry Delivery
      </h1>
      <p className="text-xl max-w-3xl mb-6">
        Experience fast, reliable, and high-quality laundry service.  
        We pick up, clean, and deliver your clothes within just 90 minutes—right at your doorstep!  
        Convenience and quality, all in one place.
      </p>

      {/* Call to Action */}
      <a
        href="/signup"
        className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-yellow-500 transition"
      >
        Get Started
      </a>

      {/* About the Website Section */}
      <div className="mt-16 bg-white text-blue-900 p-10 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">About Our Service</h2>
        <p className="text-lg text-gray-700">
          We are a premium laundry service designed for busy professionals, families, and students.  
          Our mission is to provide hassle-free, eco-friendly, and professional laundry solutions**  
          with **guaranteed fast delivery in 90 minutes.
        </p>
      </div>

      {/* Founder Information */}
      <div className="mt-12 bg-gray-100 text-blue-900 p-8 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="aps.jpg"
            alt="Founder"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold">Akshay Pratap Singh</h3>
            <p className="text-lg text-gray-700">
              A passionate entrepreneur with a vision to revolutionize the laundry industry.  
              With years of experience in customer service and logistics, John created this platform  
              to provide quick, high-quality, and convenient laundry solutions**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
