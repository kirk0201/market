import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-16">
      <textarea
        className="shadow-md w-full rounded-md border-gray-300 focus:border-blue-300"
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="font-bold w-full text-sm bg-blue-400 text-white py-2 mt-6 rounded-md border-transparent shadow-sm focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
        Submit
      </button>
    </form>
  );
};

export default Write;
