"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "name is required.";
    } else if (formData.name.length < 10) {
      newErrors.name = "name must be at least 3 characters.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "description is required.";
    } else if (formData.description.length < 10) {
      newErrors.description = "description must be at least 10 characters.";
    }

    if (!formData.price.trim()) {
      newErrors.price = "price is required.";
    } else if (Number(formData.price).length <= 0) {
      newErrors.price = "price must be greater than 0.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted sucessfully ");
      console.log("Form Data:", formData);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-12 mb-12 px-4">
      <h1 className="font-bold text-2xl mb-8">Create new Item</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Upload File */}
        <div>
          <label htmlFor="file" className="block mb-2 font-bold">
            Upload File
          </label>
          <label
            htmlFor="file"
            className="flex flex-col gap-2 items-center border-2 border-dashed rounded-md p-6 cursor-pointer bg-[#2b2b35]"
          >
            <h2 className="font-bold">
              JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
            </h2>
            <Image
              src="/save file.png"
              alt="save file"
              width={60}
              height={50}
            />
            <p className="text-sm">Drag and Drop File</p>
            <p className="text-sm">or browse media on your device</p>
          </label>
          <input type="file" id="file" hidden />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            className="w-full bg-[#2b2b35] text-white rounded-md px-4 py-3 placeholder:text-white focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-2 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description of your item"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full bg-[#2b2b35] text-white placeholder:text-white px-4 py-3 rounded-md focus:outline-none"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block mb-2 font-semibold">
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full bg-[#2b2b35] p-2 rounded-md px-4 py-3 placeholder:text-white focus:outline-none"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="w-1/3 bg-pink-600 hover:bg-pink-500 text-white text-center font-semibold py-3 rounded-md transition-all "
          >
            Create Item
          </button>
        </div>
      </form>
    </div>
  );
}
