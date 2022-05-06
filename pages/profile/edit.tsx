import type { NextPage } from "next";
import Layout from "../../components/layout";

//  label을 이용하여 input 타입 file 숨기기, accept 속성을 이용하여 image파일만 받기
const Edit: NextPage = () => {
  return (
    <Layout title="내정보 수정" canGoBack>
      <div className="py-16 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-300" />
          <label
            htmlFor="picture"
            className="font-semibold cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-md"
          >
            Change photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-bold text-black-500 pt-4"
          >
            Email address
          </label>
          <div className="pt-1">
            <input
              id="email"
              className="appearance-none w-full border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
              type="email"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="input"
            className="text-sm font-bold text-black-500 pt-4"
          >
            Phone number
          </label>
          <div className="pt-1">
            <div className="flex rounded-md shadow-md">
              <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-400 select-none">
                +82
              </span>
              <input
                id="input"
                type="text"
                className="appearance-none w-full border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>
          </div>
          <button className="font-bold w-full text-sm bg-blue-400 text-white py-2 mt-6 rounded-md border-transparent shadow-sm focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
            Update profile
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
