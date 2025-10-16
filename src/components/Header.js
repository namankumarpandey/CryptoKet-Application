import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    // Navbar
    <nav className="p-4 flex flex-wrap items-center justify-between border-b border-gray-700">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <div>
          <Image
            src="/Crypto-icon.png"
            alt="Crypto icon"
            width={20}
            height={40}
          />
        </div>
        <h1 className="font-bold text-lg ">CryptoKet</h1>
      </div>

      {/* Search Bar */}
      <form className="flex-1 max-w-md bg-gray-900 border-gray-700 rounded-xl">
        <input
          type="text"
          placeholder="Search Item Here"
          className="p-2 rounded-xl w-full focus:outline-none"
        />
      </form>

      {/* Menu and Buttons */}
      <div className="hidden md:flex gap-6 items-center">
        {/* Links */}
        <Link
          href="/explore"
          className="text-sm text-gray-400 font-semibold hover:text-white"
        >
          Explore
        </Link>
        <Link
          href="/my-Items"
          className="text-sm text-gray-400 font-semibold hover:text-white"
        >
          My Items
        </Link>
        <Link
          href="/following"
          className="text-sm text-gray-400 font-semibold hover:text-white"
        >
          Following
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          type="button"
          className="rounded-xl border-pink-200 border-solid px-6 py-2 bg-pink-600 font-bold"
        >
          Create
        </button>
        <button
          type="button"
          className="rounded-xl border-pink-600 border px-8 py-2 text-pink-600 font-bold"
        >
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Header;
