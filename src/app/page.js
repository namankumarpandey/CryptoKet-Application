import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center py-10 flex-col">
      <form className="flex flex-col gap-5 w-full max-w-md">
        <h1 className="font-extrabold text-2xl ">Create new Item</h1>

        {/* Upload File */}
        <div>
          <h1 htmlFor="file" className="block mb-1 font-bold">
            Upload File
          </h1>
          <label
            htmlFor="file"
            className="flex flex-col gap-2 justify-center items-center border-2 border-dashed p-6 cursor-pointer"
          >
            <h4>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h4>
            <Image
              src="/save file.png"
              alt="save file"
              width={60}
              height={50}
            />
            <p className="text-sm">Drag and Drop File</p>
            <p className="text-sm">or browse media on your device</p>
          </label>
          <input
            type="file"
            id="file"
            hidden
            className="w-full border-2 border-dashed p-2 rounded"
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-1 font-bold">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description of your item"
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block mb-1 font-bold">
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter Price"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Link
            href="/create-item"
            className="w-1/3 bg-pink-600 hover:bg-pink-500 text-white text-center font-semibold py-2 rounded-md transition "
          >
            Create Item
          </Link>
        </div>
      </form>
    </div>
  );
}
