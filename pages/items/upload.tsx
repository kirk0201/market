import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="cursor-pointer flex justify-center border-2 border-dashed py-16 rounded-md text-gray-300 hover:text-gray-500 hover:border-gray-500">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div>
        <label htmlFor="name" className="text-sm font-bold text-black-500 pt-4">
          Name
        </label>
        <div className="flex items-center relative pb-3">
          <input
            className="pl-7 w-full border-gray-300 rounded-md shadow-md"
            id="name"
            type="text"
          />
        </div>
        <label
          htmlFor="price"
          className="text-sm font-bold text-black-500 pt-4"
        >
          Price
        </label>
        <div className="flex items-center relative pb-3">
          <div className="absolute pl-3 pointer-events-none">
            <span className="text-gray-500 text-sm ">$</span>
          </div>
          <input
            className="pl-7 w-full border-gray-300 rounded-md shadow-md"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-2 font-bold pointer-events-none">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-1 text-sm font-bold text-black-500 pt-4">
          Description
        </label>
        <textarea
          className="shadow-md w-full rounded-md border-gray-300 focus:border-blue-300"
          rows={4}
        />
      </div>
      <button className="font-bold w-full text-sm bg-blue-400 text-white py-2 mt-6 rounded-md border-transparent shadow-sm focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
