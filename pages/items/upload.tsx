import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Textarea from "@components/textarea";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="글 작성">
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
        <div className="space-y-2">
          <Input label="이름" name="name" required />
          <Input label="가격" name="price" required kind="price" />
          <Textarea label="내용" name="description" required />
          <Button text="글 올리기" />
        </div>
      </div>
    </Layout>
  );
};

export default Upload;
