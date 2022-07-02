import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import Textarea from "@components/textarea";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout title="커뮤니티" canGoBack>
      <div>
        {/* 프로필 */}
        <div className="flex px-4 mb-3 cursor-pointer items-center space-x-4 border-b border-t py-6 pt-9">
          <div className="w-12 h-12 bg-slate-300 rounded-full" />
          <div>
            <p className="text-sm font-semibold text-gray-700">스티브 잡스</p>
            <p className="text-xs font-semibold text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        {/* 동네질문 */}
        <div className="px-4">
          <span className="px-2 py-1 rounded-full text-xs font-semibold text-gray-700 bg-slate-300">
            동네질문
          </span>
        </div>
        {/* 질문 내용 */}
        <div className="mt-2 px-4 text-gray-700">
          <span className="text-orange-500 font-semibold">Q.</span>삼성폰 어디서
          저렴하게 구매 가능 한가요?
        </div>
        {/* 궁금해요 답변 버튼 */}
        <div className="flex space-x-5 text-gray-500 mt-3 py-2 border-t border-b w-full ">
          <span className="px-4 flex items-center text-xs space-x-2">
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
        <div>
          <div className="px-4 flex space-x-4 py-4">
            <div className="w-8 h-8 bg-slate-300 rounded-full" />
            <div>
              <span className="text-xs block text-gray-800 font-semibold">
                이재용
              </span>
              <span className="text-xs block text-gray-400 font-semibold">
                2시간 전
              </span>
              <p className="text-gray-700 mt-2">
                삼성폰 삼성페이말고는 쓸모없습니다. 아이폰 쓰세요.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4">
          {/* <textarea
            className="shadow-md w-full rounded-md border-gray-300 focus:border-blue-300"
            rows={4}
            placeholder="Answer this question!"
          /> */}
          <Textarea />
          {/* <button className="font-bold w-full text-sm bg-blue-400 text-white py-2 mt-6 rounded-md border-transparent shadow-sm focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
            Reply
          </button> */}
          <Button text="답변하기" />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
