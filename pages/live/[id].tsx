import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
// aspect-video를 이용하여 비디오 화면처럼 자동으로 16:9 비율로 만듬

const Stream: NextPage = () => {
  return (
    <Layout title="라이브" canGoBack>
      <div className=" py-16 space-y-4 px-4">
        <div className="bg-slate-300 aspect-video"></div>
        <h3 className="font-semibold text-2xl text-gray-700">
          맥북 프로모션 중입니다. 많은 참여 부탁드립니다.
        </h3>
        {/* 댓글 창 */}
        <div className="overflow-y-scroll h-[50vh]">
          <Message message="얼마에 파시나요" />
          <Message message="200에 판매 중입니다." reversed />
          <Message message="프로모션 중 맞나요?" />
          <Message message="맞아요" reversed />
          <Message message="가격이 너무 비싼거 같은데요?" />
        </div>
        <div className="fixed bottom-1 w-full flex items-center mx-auto max-w-md left-0 right-0">
          <input className="w-full rounded-full border-gray-400" type="text" />
          <div className="absolute right-2 bg-blue-400 px-3 py-1 rounded-full text-white font-bold">
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
