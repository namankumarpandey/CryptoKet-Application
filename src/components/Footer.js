import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    // Footer
    <footer className="mt-auto text-white flex flex-col border-t border-gray-700 px-6 py-10 md:px-24 lg:py-10">
      <div className="grid grid-cols-6 gap-6">
        {/* Left Section */}
        <div className="col-span-6 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2">
              <Image
                src="/Crypto-icon.png"
                alt="Crypto icon"
                width={20}
                height={40}
              />
            </div>
            <h2 className="text-xl font-semibold">CryptoKet</h2>
          </div>

          <p className="font-bold text-gray-300 mb-4">Get the latest updates</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl w-full max-w-xs sm:max-w-sm relative">
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl bg-gray-900 focus:outline-none px-5 py-3 w-full"
            />
            <button
              type="button"
              className="rounded-xl bg-pink-600 hover:bg-pink-700 px-5 py-3 font-semibold transition-all absolute right-3 bottom-0"
            >
              Email Me!
            </button>
          </div>
        </div>


        {/* Middle Section */}
        <div className="col-span-3 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-white">CryptoKet</h3>
          <ul className="space-y-3 text-gray-300">
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

        {/* Right Section */}
        <div className="col-span-3 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-white ">Support</h3>
          <ul className="space-y-3 text-gray-300">
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

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-xs text-white font-bold border-t border-gray-700 pt-6">
        <p>© CryptoKet, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
