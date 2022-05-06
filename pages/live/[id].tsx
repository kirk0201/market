import type { NextPage } from "next";
import Layout from "../../components/layout";
// aspect-video를 이용하여 비디오 화면처럼 자동으로 16:9 비율로 만듬

const Stream: NextPage = () => {
  return (
    <Layout title="라이브" canGoBack>
      <div className=" py-16 space-y-4 px-4">
        <div className="bg-slate-300 aspect-video"></div>
        <h3 className="font-semibold text-2xl text-gray-700">
          Let's try potatos
        </h3>
        {/* 댓글 창 */}
        <div className="overflow-y-scroll h-[50vh]">
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
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse space-x-2 space-x-reverse">
            <div className="w-8 h-8 bg-slate-300 rounded-full" />
            <div className="border px-2 py-2 text-sm border-gray-400 rounded-md w-1/2">
              I want ￦20,000
            </div>
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

export default Stream;
