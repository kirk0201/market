import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
// divide-y-[1px] last:를 사용하지 않고 처음과 끝에 css효과를 없앨수 있음
const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="채팅">
      <div className="py-5 divide-y-[1px]">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Link key={i} href={`/chats/${i}`}>
            <a className="flex px-4 cursor-pointer items-center space-x-4 py-3">
              <div className="w-12 h-12 bg-slate-300 rounded-full" />
              <div>
                <p className="font-semibold text-gray-700">Steve Jebs</p>
                <p className="text-sm text-gray-500">See you tomorrow</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
