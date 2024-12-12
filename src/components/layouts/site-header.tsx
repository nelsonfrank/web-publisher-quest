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
      <div className="relative top-0 z-50 w-full h-16 flex items-center container mx-auto">
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

        <div></div>
      </section>
      <div className="relative z-50 h-full text-red flex flex-col justify-end pb-36 mx-8 lg:pb-0 lg:justify-center lg:container lg:mx-auto">
        <h1 className="text-6xl font-heading mb-8 flex flex-col lg:text-9xl">
          <span className="inline-flex mb-4">
            THE <Icons.first className="ml-4 lg:ml-8 lg:size-32 lg:-mt-2" />
          </span>
          <span>BUILDING</span>
        </h1>
        <div>
          <p className="text-lg font-bold mb-2 lg:text-2xl">
            최고의 공간을 경험하세요
          </p>
          <p className="font-light text-xs lg:text-lg">
            국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
          </p>
        </div>
      </div>
    </header>
  );
}
