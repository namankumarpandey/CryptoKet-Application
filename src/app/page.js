import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col">
      <form className="flex flex-col gap-4 py-2 ">
        <div className="font-bold ">Create new Item</div>
        <div>
          <label htmlFor="file">Upload File</label>
          <label
            htmlFor="file"
            className="flex flex-col gap-3 justify-center items-center border-2 border-dashed p-4"
          >
            <h4>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h4>
            <h6>Drag and Drop File</h6>
            <h6>or browse media on your device</h6>
          </label>
          <input
            type="file"
            id="file"
            hidden
            className="w-full border-2 border-dashed p-2 rounded "
            placeholder="Drag and Drop File or browse media on your device"
          />
        </div>

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
        <div>
          <label htmlFor="description" className="block font-bold">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description of your item"
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <div>
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter Price"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-1/4 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 rounded-md transition "
          >
            <Link href="/create-item">Create Item </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
