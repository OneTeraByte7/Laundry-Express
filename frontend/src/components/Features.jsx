import { useEffect, useState } from "react";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      {/* Striking 90-Minute Delivery Section */}
      <div className="bg-blue-900 text-white py-12 px-6 text-center rounded-lg shadow-lg">
        <h2 className="text-5xl font-extrabold">🚀 90-Minute Delivery!</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          We guarantee super-fast laundry service with pick-up and delivery in just 90 minutes!
          Experience the fastest and most reliable laundry care, right at your doorstep.
        </p>
      </div>

      <h2 className="text-4xl font-bold mt-12 text-center text-blue-900">
        Why Choose Us?
      </h2>
      <p className="text-lg text-center text-gray-700 mb-8">
        Enjoy top-quality laundry service with convenience, affordability, and premium care.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">✨</span>
              <h3 className="text-xl font-semibold text-blue-800">{feature.title}</h3>
            </div>
            <p className="text-gray-700">{feature.description}</p>
            {feature.details && (
              <p className="mt-2 text-sm text-gray-500">{feature.details}</p>
            )}
          </div>
        ))}
      </div>

      {/* Additional Unique Features */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center text-blue-900">
          What Makes Us Stand Out?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold text-blue-800">🏆 Best Quality Service</h3>
            <p className="text-gray-700">
              Our team ensures top-notch cleaning with premium detergents and expert care.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold text-blue-800">🌿 Eco-Friendly Process</h3>
            <p className="text-gray-700">
              We use environmentally safe detergents and a sustainable cleaning process.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-semibold text-blue-800">👔 Professional Staff</h3>
            <p className="text-gray-700">
              Our skilled team handles your clothes with utmost care and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
