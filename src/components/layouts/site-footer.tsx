import Link from "next/link";

import { Icons } from "@/components/icons";
import { Shell } from "@/components/shell";

export function SiteFooter() {
  return (
    <footer className="w-full bg-background container mx-auto pt-10">
      <Shell>
        <section className="flex flex-col mb-16">
          <section>
            <Link href="/" className=" items-center space-x-2 flex">
              <Icons.logo className="size-50" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
            <section className="mt-4">
              <p className="text-xs">
                주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시
                중구 을지로 5길 26 ) <br />
                대표번호 : 02-6030-0100
              </p>
            </section>
          </section>
        </section>
        <section className="flex items-center space-x-4">
          <div className="flex-1 text-left text-xs leading-loose text-muted-foreground">
            COPYRIGHT(C) 2011 MIRAE ASSET COPORATION. CO., Ltd. ALL RIGHT
            RESERVED.
          </div>
        </section>
      </Shell>
    </footer>
  );
}
