/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

export const CarouselSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative h-screen">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen flex items-center justify-center">
                <img
                  src={
                    isDesktop
                      ? `/images/carousel/${index + 1}.jpeg`
                      : `/images/carousel/sm/${index + 1}.jpeg`
                  }
                  alt="Slide 1"
                  className="absolute inset-0 w-full h-full object-fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start py-[280px] px-4 md:px-16">
                  <h1 className=" text-white text-3xl md:text-[80px] -tracking-[0.8px] leading-none font-bold flex flex-col container mx-auto mb-[280px]">
                    <span className="inline-flex ">
                      The <Icons.first className="size-24 ml-8 -mt-4" />{" "}
                      Environment you
                    </span>
                    <span className="text-start">would imagine</span>
                  </h1>
                  <div className="container mx-auto">
                    <Progress
                      value={50}
                      className="h-[4px] w-[1043px] mb-4 text-white"
                    />
                    <p className="text-white md:font-bold text-xs md:text-xl  mb-9 md:leading-8 md:-tracking-[0.2px]">
                      서울 청계천은 자연 그대로의 휴식과 재충전 공간이며,
                      점심시간과 퇴근길에 만나는 청계천의 여유로움은 <br />
                      CENTER1 입주자 및 이용객이 누릴 수 있는 특권입니다. <br />
                      이용자를 위한 감성적인 요소뿐만 아니라, 국내 최고 수준의
                      친환경 기준을 실천하여 국내외에서 친환경 건축물로
                      인증받았습니다.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-transparent py-5 px-5 border-2"
                    >
                      view more
                      <span>
                        <ChevronRight />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
        {Array.from({ length: 4 }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-8 h-[3px] rounded-full focus:outline-none transition-colors",
              current === index + 1 ? "bg-white" : "bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};
