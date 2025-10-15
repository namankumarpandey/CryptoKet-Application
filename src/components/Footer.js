import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-300">
      <div className="py-4 flex items-center justify-center gap-6 border-y-2">
        <div className="flex flex-col gap-1 pr-28">
          <h3 className="text-lg font-semibold mb-2 text-white">CryptoKet</h3>
          <p className="font-bold">Get the latest updates</p>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Your Email"
              className="rounded-l-sm bg-gray-900 w-40"
            />
            <button type="button" className="rounded-xl bg-pink-600 hover:bg-pink-500 p-2">
              Email Me!
            </button>
          </div>
        </div>
        <div className="px-10">
          <h4 className="font-semibold mb-2 text-white">CryptoKet</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="px-28">
          <h4 className="font-semibold mb-2 text-white ">Support</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-white font-bold mt-6">
        © CryptoKet, Inc. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
