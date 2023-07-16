import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-52 w-screen bg-gray-800">
      <h3 className="font-semibold text-white text-3xl">Newsletter</h3>
      <div className="flex mt-4">
        <input
          type="email"
          placeholder="your@email.com"
          className="focus:outline-none pl-2"
          required
        />
        <button className="bg-white p-1 ml-1">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
