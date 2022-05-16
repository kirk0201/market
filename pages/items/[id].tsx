import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "@components/button";
import Layout from "@components/layout";
import styles from "../styles/Home.module.css";

const ItemDetail: NextPage = () => {
  return (
    <Layout title="아이템" canGoBack>
      <div className="px-4">
        <div>
          <div className="h-96 bg-slate-300" />
          <div className="flex cursor-pointer items-center space-x-4 border-b border-t py-3">
            <div className="w-12 h-12 bg-slate-300 rounded-full" />
            <div>
              <p className="text-sm font-semibold text-gray-700">Steve Jebs</p>
              <p className="text-xs font-semibold text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl mt-6 font-bold">Galaxy S50</h1>
            <span className="text-2xl block mt-3 font-bold text-gray-600">
              $140
            </span>
            <p className="my-6 text-gray-700 text-base">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <Button text="Talk to seller" large />
              <button className="p-3 flex items-center justify-center bg-gray-50 text-gray-300 hover:text-gray-500 rounded-md">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl pt-4">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 py-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-36 bg-slate-300" />
                <h3 className="font-bold text-sm">Galaxy S60</h3>
                <p className="font-bold text-xs">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
