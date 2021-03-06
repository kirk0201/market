import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
// 중앙 정렬을 위한 다른 방법 inset-x-0 mx-auto
const ChatDetail: NextPage = () => {
  return (
    <Layout title="채팅" canGoBack>
      <div className="px-4 py-16">
        <Message message="혹시 얼마에 파시나요?" />
        <Message message="200만원 생각하고 있습니다" reversed />
        <Message message="네고 가능한가요?" />
        <form className="fixed bottom-1 inset-x-0 py-2">
          <div className="relative flex items-center mx-auto max-w-md left-0 right-0">
            <input
              className="w-full rounded-full border-gray-400"
              type="text"
            />
            <div className="absolute right-2 bg-blue-400 px-3 py-1 rounded-full text-white font-bold cursor-pointer">
              <button>&rarr;</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
