"use client";

import * as React from "react";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { GlobeIcon } from "@radix-ui/react-icons";

export function MainNav() {
  return (
    <div className="hidden gap-6 w-full lg:flex lg:justify-between lg:items-center my-6">
      <div className="flex justify-center items-center gap-20">
        <Link href="/" className="hidden items-center lg:flex">
          <Icons.logo
            className="w-[300px] h-[29.4px] flex-grow-0 object-contain"
            aria-hidden="true"
          />
          <span className="sr-only">Home</span>
        </Link>
        <ul className="flex font-bold text-xl  leading-8 -tracking-[0.2px]">
          <li className="w-[168px] text-center">
            <Link href="/">센터원</Link>
          </li>
          <li className="w-[168px] text-center">
            <Link href="/">이용안내</Link>
          </li>
          <li className="w-[168px] text-center">
            <Link href="/">서비스소개</Link>
          </li>
          <li className="w-[168px] text-center">
            <Link href="/">임대문의</Link>
          </li>
          <li className="w-[168px] text-center">
            <Link href="/">고객지원</Link>
          </li>
        </ul>
      </div>
      <div>
        <GlobeIcon height={24} width={24} />
      </div>
    </div>
  );
}
