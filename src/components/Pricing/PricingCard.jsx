import React from "react";
const PricingCard = ({ item }) => {
  const { name, price, duration, features, popular } = item;

  return (
    <div
      className={`relative rounded-2xl p-6 shadow-lg border transition duration-300 hover:translate-y-1 bg-blue-900/30 flex flex-col
      ${popular ? "border-blue-500" : "border-gray-700"}`}
    >
      {/* Popular badge */}
      {popular && (
        <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl">
          Most Popular
        </span>
      )}

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">{name}</h2>

      {/* Price */}
      <p className="text-3xl font-semibold mb-4">
        ${price}
        <span className="text-base font-normal text-white">/{duration}</span>
      </p>
      <div className="flex-1">
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-400">
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        className={`w-full py-2 rounded-lg font-medium transition 
        ${
          popular
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-blue-900/40 hover:bg-gray-700"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
