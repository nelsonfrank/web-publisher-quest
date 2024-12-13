/* eslint-disable @next/next/no-img-element */
import { CARD_DATA, CONVENIENCE_DATA } from "@/assets/data";
import { Card } from "@/components/card";
import { CarouselSection } from "@/components/carousel-section";

export default function Home() {
  return (
    <div>
      <div className="py-20 container mx-auto">
        <section className="px-4">
          <div>
            <div className="mb-10">
              <h2 className="font-bold font-header text-2xl mb-4">
                Convenience
              </h2>
              <div className="flex flex-col md:flex-row md:items-center">
                <p className="text-2xl font-body mb-4">
                  미래에셋센터원에서 경험하는
                </p>
                <p className="font-bold font-header text-primary text-2xl mb-4 md:ml-2">
                  특별한 서비스
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-10">
              {CONVENIENCE_DATA.map((item, index) => (
                <Card
                  key={index + 1}
                  title={item.title}
                  description={item.description}
                  imgPath={item.imgPath}
                  hasProgressBar={item.hasProgressBar}
                  progressBarValue={item.progressBarValue}
                  className={item.className}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <section>
        <CarouselSection />
      </section>
      <div className="py-20 container mx-auto">
        <section className="px-4">
          <div>
            <div className="mb-16">
              <h2 className="font-bold font-header text-2xl mb-4">
                ONLY CENTER <sup>1</sup>
              </h2>
              <div className="flex flex-col md:flex-row md:items-center">
                <p className="text-2xl font-body mb-4">
                  미래에셋센터원에서만 누리는
                </p>
                <p className="font-bold font-header text-primary text-2xl mb-4 md:ml-2">
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
                  className={item.className}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
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
