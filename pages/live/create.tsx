import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="px-4 py-16">
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
        Go Live
      </button>
    </div>
  );
};

export default Create;
