import {/* useEffect,*/ useState } from "react";

const Testimonials = () => {
  const [testimonials/*, setTestimonials*/] = useState([
    {
      name: "BVG Group",
      review:
        "This laundry service is a game-changer! The 90-minute delivery is truly revolutionary. Excellent quality and reliability.",
      position: "Leading Facility Management Company",
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
    {
      name: "Andrew Tate",
      review:
        "This business idea is pure genius. Speed, convenience, and efficiency combined—this is what success looks like!",
      position: "Entrepreneur & Business Strategist",
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
    {
      name: "Alex Costa",
      review:
        "Soham's vision and leadership are remarkable. He is redefining how laundry services work with his innovative approach.",
      position: "Men’s Lifestyle & Business Influencer",
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
    {
      name: "Sophia Johnson",
      review:
        "I've never seen a laundry service so fast! It's incredibly convenient and perfect for my busy lifestyle.",
      position: "Fashion Designer",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Rahul Sharma",
      review:
        "A truly innovative service! Their attention to detail and customer service is unmatched.",
      position: "Tech Entrepreneur",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Emily Roberts",
      review:
        "Tried this service once, and now I can't imagine going back. 90-minute delivery is a life-saver!",
      position: "Working Professional",
      image: "https://via.placeholder.com/100",
    },
  ]);

  return (
    <div className="bg-gray-100 py-16 text-center min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-blue-900">
        What Industry Leaders & Customers Say
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Trusted by professionals, business leaders, and everyday users alike,
        our 90-minute laundry service is making waves in the industry.
      </p>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-800 italic">"{testimonial.review}"</p>
            <h4 className="text-blue-900 font-bold mt-4">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.position}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="/signup"
          className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition"
        >
          Experience the Best Laundry Service Now
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
