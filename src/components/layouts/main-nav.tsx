"use client";

import * as React from "react";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { GlobeIcon } from "@radix-ui/react-icons";

export function MainNav() {
  return (
    <div className="hidden gap-6 w-full lg:flex lg:justify-between my-8">
      <div className="flex gap-24">
        <Link href="/" className="hidden items-center space-x-2 lg:flex">
          <Icons.logo className="size-50" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </Link>
        <ul className="flex gap-24">
          <li>
            <Link href="/">센터원</Link>
          </li>
          <li>
            <Link href="/">이용안내</Link>
          </li>
          <li>
            <Link href="/">서비스소개</Link>
          </li>
          <li>
            <Link href="/">임대문의</Link>
          </li>
          <li>
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
