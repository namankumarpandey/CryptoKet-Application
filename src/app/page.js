export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col">
      <form className="flex flex-col gap-4">
        <div>Create new Item</div>
        <div>
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            id="file"
            className="w-full border-2 border-dashed border- p-2 rounded "
            placeholder="Drag and Drop File or browse media on your device"
          />
        </div>

        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
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
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description of your item"
            className="w-full border p-2 rounded px-4 py-3"
          ></textarea>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter Price"
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 mb-4 rounded-md transition"
        >
          Create Item
        </button>
      </form>
    </div>
  );
}
