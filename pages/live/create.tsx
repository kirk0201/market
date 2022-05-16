import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Textarea from "@components/textarea";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Live Create">
      <div className="px-4 py-16">
        <div className="space-y-2">
          <Input label="Name" name="name" required />
          <Input label="Price" name="price" kind="price" required />
          <Textarea label="Description" name="description" required />
          <Button text="Go Live" />
        </div>
      </div>
    </Layout>
  );
};

export default Create;
