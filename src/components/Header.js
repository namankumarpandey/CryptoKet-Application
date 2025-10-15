import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-4 flex gap-8 items-center justify-center border-b-1">
      {/* Logo */}
      <div className="flex flex-row items-center gap-2 pl-8">
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

      {/* Search */}
      <form className="flex-1 max-w-md bg-gray-900 border-gray-700 rounded-xl">
        <input
          type="text"
          placeholder="Search Item Here"
          className="p-2 rounded-xl w-full"
        />
      </form>

      {/* Link */}
      <div className="flex gap-4 items-center">
        <Link href="/explore" className="text-sm text-gray-500 font-semibold">
          Explore
        </Link>
        <Link href="/my-Items" className="text-sm text-gray-500 font-semibold">
          My Items
        </Link>
        <Link href="/following" className="text-sm text-gray-500 font-semibold">
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
    </div>
  );
};

export default Header;
