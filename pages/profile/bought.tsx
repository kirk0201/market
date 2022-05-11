import type { NextPage } from "next";
import Item from "../../components/Item";
import Layout from "../../components/layout";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex px-4 flex-col space-y-5 py-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            title="New Iphone 14"
            id={i}
            price={950000}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
