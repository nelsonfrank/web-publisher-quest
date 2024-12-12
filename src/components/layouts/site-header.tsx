import { siteConfig } from "@/config/site";
// import { CartSheet } from "@/components/checkout/cart-sheet"
// import { AuthDropdown } from "@/components/layouts/auth-dropdown"
import { MainNav } from "@/components/layouts/main-nav";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { Icons } from "../icons";
// import { ProductsCombobox } from "@/components/products-combobox"

export function SiteHeader() {
  return (
    <header className="relative w-full h-[75vh] bg-transparent">
      <div className="absolute top-0 z-50 container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
      </div>

      <section className="absolute top-0 z-10 w-full h-full overflow-hidden">
        <picture>
          <source media="(max-width: 600px)" srcSet="/images/hero-small.png" />
          {/* <source media="(max-width: 1024px)" srcSet="images/hero-medium.png" /> */}
          <source media="(min-width: 1025px)" srcSet="/images/hero-large.png" />
          <img
            src="/images/hero-large.png"
            alt="Hero Image"
            className="w-full h-full object-fill"
          />
        </picture>

        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute bottom-16 left-7 text-white ">
          <h1 className="text-6xl font-heading mb-8 flex flex-col">
            <span className="inline-flex">
              THE <Icons.first className="ml-4" />
            </span>
            <span>BUILDING</span>
          </h1>
          <div>
            <p className="text-lg font-bold mb-2">최고의 공간을 경험하세요</p>
            <p className="font-light text-xs">
              국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </header>
  );
}
