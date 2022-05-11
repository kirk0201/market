import Link from "next/link";
import React from "react";
import { cls } from "../libs/utils";

interface FloattingProps {
  children: React.ReactNode;
  href: string;
}

export default function FloattingButton({ children, href }: FloattingProps) {
  return (
    <Link href={href}>
      <a
        className={cls(
          "fixed xl:right-[46rem] right-2 bottom-40 border rounded-full p-2 shadow-md transition-colors bg-blue-300 text-white hover:bg-blue-500 hover:text-blue-200",
          ""
        )}
      >
        {children}
      </a>
    </Link>
  );
}
