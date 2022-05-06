import type { NextPage } from "next";
import Layout from "../../components/layout";
// 중앙 정렬을 위한 다른 방법 inset-x-0 mx-auto
const ChatDetail: NextPage = () => {
  return (
    <Layout title="채팅" canGoBack>
      <div className="px-4 py-16">
        <div className="flex space-x-2 py-4">
          <div className="w-8 h-8 bg-slate-300 rounded-full" />
          <div className="border px-2 py-2 text-sm border-gray-400 rounded-md w-1/2">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="flex flex-row-reverse space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-slate-300 rounded-full" />
          <div className="border px-2 py-2 text-sm border-gray-400 rounded-md w-1/2">
            I want ￦20,000
          </div>
        </div>
        <div className="flex space-x-2 py-4">
          <div className="w-8 h-8 bg-slate-300 rounded-full" />
          <div className="border px-2 py-2 text-sm border-gray-400 rounded-md w-1/2">
            미쳤어
          </div>
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

export default ChatDetail;
