import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-4 flex gap-4 items-center justify-center border-b-1">
      <h1>CryptoKet</h1>
      <form className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search Item Here"
          className="border p-2 rounded w-full"
        />
      </form>

      <div className="flex gap-4 items-center">
        <Link href="/explore" className="text-2xl font-semibold mb-2">
          Explore
        </Link>
        <Link href="/my-Items" className="text-2xl font-semibold mb-2">
          My Items
        </Link>
        <Link href="/following" className="text-2xl font-semibold mb-2">
          Following
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="rounded border-pink-200 border-solid border px-3 bg-pink-600 "
        >
          Create
        </button>
        <button
          type="button"
          className="rounded border-pink-200 border-solid border px-6"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default Header;
