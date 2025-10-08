import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-300 py-10 mt-auto  ">
      <div className="max-w-6xl mx-auto py-4 grid grid-cols-2 md:grid-cols-4 gap-6 border-y-2">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">CryptoKet</h3>
          <p className="text-sm">Get the latest updates</p>
          <div className="flex mt-2">
            <form>
              <input
                type="text"
                placeholder="Your Email"
                className="rounded-r-none"
              />
              <button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700">
                Email Me!
              </button>
            </form>
          </div>
        </div>
        <div>
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
        <div>
          <h4 className="font-semibold mb-2 text-white">Support</h4>
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
      <div className="text-center text-xs text-gray-500 mt-6">
        © CryptoKet, Inc. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
