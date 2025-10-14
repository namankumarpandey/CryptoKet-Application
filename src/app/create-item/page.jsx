import React from "react";

const page = () => {
  return (
      <div className="flex md:flex-row bg-[#343442] rounded-xl overflow-hidden shadow-2xl w-full">
        {/* Left side image */}
        <div className="md:w-1/2 p-11 ">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
            alt="Image"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Middle Divider Line */}
        <div className="hidden md:block w-px bg-gray-700"></div>

        <div className="md:w-1/2 p-8 flex flex-col justify-between ">
          {/* Top content */}
          <div>
            <h2 className="text-xl font-bold mb-1">Abstract Smoke Red Blue</h2>
            <p className="text-sm text-gray-400 mb-5">
              From 4.5 ETH - 20 of 25 available
            </p>

            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Creator"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-400">Creator</p>
                <p className="font-semibold">Mia Ayana</p>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-700 pb-2 mb-4">
              <button className="text-white font-medium border-b-2 border-pink-600 pb-1">
                Details
              </button>
              <button className="text-gray-400 font-medium hover:text-white">
                Offers
              </button>
              <button className="text-gray-400 font-medium hover:text-white">
                History
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Buy for 4.5 ETH
            </button>
            <button className="border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition">
              Make Offer
            </button>
          </div>
        </div>
      </div>
  );
};

export default page;
