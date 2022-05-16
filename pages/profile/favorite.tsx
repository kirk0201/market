import type { NextPage } from "next";
import Item from "@components/Item";
import Layout from "@components/layout";

const Favorite: NextPage = () => {
  return (
    <Layout title="관심목록" canGoBack>
      <div className="flex px-4 flex-col space-y-5 py-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            title="New Galaxy S22"
            price={1050000}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Favorite;
