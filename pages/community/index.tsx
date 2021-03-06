import type { NextPage } from "next";
import Link from "next/link";
import FloattingButton from "@components/floating-button";
import Layout from "@components/layout";

const Community: NextPage = () => {
  return (
    <Layout hasTabBar title="동네생활">
      <div className="px-4 py-10 space-y-8 ">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Link key={i} href={`/community/${i}`}>
            <a className="flex flex-col items-start shadow-md px-4">
              <span className="px-2 py-1 rounded-full text-xs font-semibold text-gray-700 bg-slate-300">
                동네질문
              </span>
              <div className="mt-2 text-gray-700">
                <span className="text-orange-500 font-semibold">Q.</span>
                이번에 아이폰으로 바꿔보려고 하는데 어디서 구매하는게 좋을까요?
              </div>
              <div className="w-full mt-5 flex justify-between items-center text-xs text-gray-500 font-semibold">
                <span>이재용</span>
                <span>18시간 전</span>
              </div>
              <div className="flex space-x-5 text-gray-500 mt-3 py-2 border-t border-b w-full ">
                <span className="flex items-center text-xs space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>궁금해요 1</span>
                </span>
                <span className="flex items-center text-xs space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>답변 1</span>
                </span>
              </div>
            </a>
          </Link>
        ))}

        <FloattingButton href="/community/write">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloattingButton>
      </div>
    </Layout>
  );
};

export default Community;
