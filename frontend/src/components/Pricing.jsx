import { useEffect, useState } from "react";

const Pricing = () => {
  // Hardcoded pricing plans (random values)
  const pricingPlans = [
    { plan: "Basic", details: "Includes 5 washes per month", price: "₹399" },
    { plan: "Standard", details: "Includes 10 washes per month", price: "₹699" },
    { plan: "Premium", details: "Unlimited washes with priority service", price: "₹1299" },
  ];

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setPlans(pricingPlans);
    }, 1000);
  }, []);

  return (
    <div className="p-6 pt-20 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6">Our Pricing Plans</h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Choose a plan that best fits your laundry needs. We offer affordable pricing with top-quality service.
      </p>

      {plans.length === 0 ? (
        <p className="text-center text-red-600 font-bold">Loading pricing plans...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg bg-white text-center">
              <h3 className="text-2xl font-semibold mb-2">{plan.plan}</h3>
              <p className="text-md text-gray-600 mb-4">{plan.details}</p>
              <p className="text-xl font-bold text-green-600">{plan.price}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center text-gray-700">
        <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          We provide the best laundry service with quick pickup and delivery, eco-friendly cleaning, and affordable pricing.
          Join thousands of satisfied customers today!
        </p>
      </div>
    </div>
  );
};

export default Pricing;
