import { siteConfig } from "@/config/site";
// import { CartSheet } from "@/components/checkout/cart-sheet"
// import { AuthDropdown } from "@/components/layouts/auth-dropdown"
import { MainNav } from "@/components/layouts/main-nav";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { Icons } from "../icons";
// import { ProductsCombobox } from "@/components/products-combobox"

export function SiteHeader() {
  return (
    <header className="relative w-full h-[1000px] bg-transparent">
      <div className="relative top-0 z-50 w-full h-20 flex items-center container mx-auto">
        <MainNav />
        <MobileNav items={siteConfig.mainNav} />
      </div>

      <section className="absolute top-0 z-10 w-full h-full overflow-hidden">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/hero-small.png" />
          {/* <source media="(max-width: 1024px)" srcSet="images/hero-medium.png" /> */}
          <source media="(min-width: 1025px)" srcSet="/images/hero-large.png" />
          <img
            src="/images/hero-large.png"
            alt="Hero Image"
            className="w-full h-full object-fill"
          />
        </picture>

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>
      <div className="relative z-50 h-full text-red flex  flex-col justify-end pb-36 mx-8 lg:pb-0 lg:mt-[203px] lg:justify-start lg:container lg:mx-auto">
        <h1 className="text-[180px] font-heading mb-8 flex flex-col text-white lg:text-9xl">
          <span className="inline-flex mb-2 tracking-tight text-[143px] ">
            THE{" "}
            <Icons.first className="ml-4 lg:ml-[3.52rem] lg:w-[145px] lg:h-[145px] lg:-mt-3.5" />
          </span>
          <span className="leading-[1.14] tracking-tight text-[143px]">
            BUILDING
          </span>
        </h1>
        <div className="lg:mt-6">
          <p className=" font-bold mb-4 lg:text-[32px] lg:tracking-tight ">
            <span className="">최고의</span> <span>공간을</span>{" "}
            <span>경험하세요</span>
          </p>
          <p className="font-light text-xl lg:ml-1.5 lg:text-lg  lg:tracking-wider ">
            국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
          </p>
        </div>
      </div>
    </header>
  );
}
