import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
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
        <div className="space-y-2">
          <Input label="Email" name="email" />
          <Input label="Phone" name="phone" kind="phone" />
        </div>
        <Button text="Update profile" />
      </div>
    </Layout>
  );
};

export default Edit;
