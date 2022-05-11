import type { NextPage } from "next";
import Item from "../../components/Item";
import Layout from "../../components/layout";

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex px-4 flex-col space-y-5 py-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            title="New Mac Book"
            price={1650000}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
