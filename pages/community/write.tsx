import type { NextPage } from "next";
import Button from "@components/button";
import Textarea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-16">
      <Textarea required placeholder="질문을 작성해주세요" />
      <Button text="제출하기" />
    </form>
  );
};

export default Write;
