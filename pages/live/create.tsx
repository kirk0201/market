import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Textarea from "@components/textarea";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="라이브 방송하기">
      <div className="px-4 py-16">
        <div className="space-y-2">
          <Input label="이름" name="name" required />
          <Input label="가격" name="price" kind="price" required />
          <Textarea label="내용" name="description" required />
          <Button text="라이브 시작하기" />
        </div>
      </div>
    </Layout>
  );
};

export default Create;
