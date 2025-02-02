/* eslint-disable @next/next/no-img-element */
import { CARD_DATA, CONVENIENCE_DATA } from "@/assets/data";
import { Card } from "@/components/card";
import { CarouselSection } from "@/components/carousel-section";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <div className="my-40 container mx-auto">
        <section>
          <div>
            <div className="mb-10">
              <h2 className="font-bold font-header text-[40px] mb-0 -tracking-[0.56px] leading-relaxed">
                Convenience
              </h2>
              <div className="flex flex-col text-[40px] md:flex-row md:items-center">
                <p className=" font-body t -tracking-[0.4px] leading-[64px]">
                  미래에셋센터원에서 경험하는
                </p>
                <p className="font-bold font-header text-primary ml-2">
                  특별한 <span className="ml-[0.01rem]">서비스</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-5">
              {CONVENIENCE_DATA.map((item, index) => (
                <Card
                  key={index + 1}
                  title={item.title}
                  description={item.description}
                  imgPath={item.imgPath}
                  hasProgressBar={item.hasProgressBar}
                  progressBarValue={item.progressBarValue}
                  className={cn(
                    index === 0
                      ? "md:mt-16 lg:mt-[120px]"
                      : index === 1
                      ? "md:mt-8 lg:mt-[60px]"
                      : ""
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <section>
        <CarouselSection />
      </section>
      <div className="py-[180px] container mx-auto">
        <section className="">
          <div>
            <div className="mb-40">
              <h2 className="font-bold font-header text-5xl mb-4">
                <Icons.onlyCenter className="" />
              </h2>
              <div className="flex flex-col md:flex-row md:items-center">
                <p className="text-4xl font-heading leading-9 tracking-widest mb-4">
                  미래에셋센터원에서만 누리는
                </p>
                <p className="font-bold font-heading leading-9 tracking-widest text-primary text-4xl  mb-4 md:ml-2">
                  특별한 혜택
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-10">
              {CARD_DATA.map((item, index) => (
                <Card
                  key={index + 1}
                  title={item.title}
                  description={item.description}
                  imgPath={item.imgPath}
                  className={index === 0 ? "-mt-10" : ""}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="h-screen bg-white text-black py-40">
        <div className="container mx-auto flex gap-[60px]">
          <div className="w-1/2 py-5 ">
            <div className="flex items-center justify-between w-full">
              <h2 className="font-heading text-[40px] font-bold leading-[64px] -tracking-[0.56px]">
                지금 살펴봐야할 이벤트
              </h2>
              <div>
                <Icons.add />
              </div>
            </div>
            <div className="mt-12">
              <img
                src="/images/section-2/first.png"
                alt="slider"
                className="mb-6"
              />
              <div>
                <h3 className="text-[32px] font-bold font-heading leading-[48px] -tracking-[0.32px]">
                  미래에셋센터원 크리스마스 작은 음악회
                </h3>
                <ul className="list-disc pl-8 text-main-gray text-xl mb-6 font-body">
                  <li>공연 주제 : 재즈 공연</li>
                  <li>
                    장소 : 1층 계단 앞(연주), 1층 크리스마스 트리 앞(다과 및
                    커피 배포)
                  </li>
                </ul>
                <p className="text-main-gray text-lg leading-7 -tracking-[0.18px]">
                  2024.12.20(금)~2024.12.20(금)
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 py-5 ">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-[40px] font-bold leading-[64px] -tracking-[0.56px]">
                센터원 소식
              </h2>
              <div>
                <Icons.add />
              </div>
            </div>
            <div className="mt-12">
              <img src="" alt="" />
              <div>
                <h3 className="text-[28px] leading-[45px] -tracking-[0.28px] font-bold text-main-blue">
                  미래에셋센터원 홈페이지 리뉴얼 안내
                </h3>
                <p className="font-body text-xl leading-8 -tracking-[0.2px] text-main-blue mb-5">
                  미래에셋센터원 공식 홈페이지가 리뉴얼 오픈했습니다. 더 나은
                  서비스 제공을 위해 불편한...
                </p>
                <p className="text-base leading-7 -tracking-[0.16px] text-main-blue">
                  2024.09.04(수)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen py-40">
        <div></div>
      </section>
      <section>
        <div className="relative w-full h-[75vh]">
          {/* Background Image */}
          <img
            src="/images/banner.png"
            alt="Mirae Asset Center"
            className="w-full h-full object-cover"
          />

          {/* Overlay with Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
              MIRAE ASSET
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mt-2 text-center">
              CENTER 1
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
