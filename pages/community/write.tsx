import type { NextPage } from "next";
import Button from "../@components/button";
import Textarea from "../@components/textarea";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-16">
      <Textarea required placeholder="Ask a question!" />
      <Button text="Submit" />
    </form>
  );
};

export default Write;
