import type { NextPage } from "next";
import Link from "next/link";
import FloattingButton from "@components/floating-button";
import Layout from "@components/layout";
// aspect-video를 이용하여 비디오 화면처럼 자동으로 16:9 비율로 만듬

const Live: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="py-16 space-y-8 divide-y-2 px-4">
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
          <Link key={i} href={`/live/${i}`}>
            <a className="" key={i}>
              <div className="bg-slate-300 aspect-video"></div>
              <h3 className="font-semibold text-lg pt-2 text-gray-700">
                맥북 프로모션 중입니다. 많은 참여 부탁드립니다.
              </h3>
            </a>
          </Link>
        ))}
        <FloattingButton href="/live/create">
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
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloattingButton>
      </div>
    </Layout>
  );
};

export default Live;
