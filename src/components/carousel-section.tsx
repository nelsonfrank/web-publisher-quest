"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

export const CarouselSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative bg-white w-full h-screen">
      <Carousel
        setApi={setApi}
        className=""
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              {/* <div className="relative"> */}
              {/* <section className="w-full h-full overflow-hidden">
                  <img
                    src={
                      isDesktop
                        ? `/images/carousel/${index + 1}.jpeg`
                        : `/images/carousel/sm/${index + 1}.jpeg`
                    }
                    alt="carousel"
                    className="w-full h-full object-fill"
                  />

                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </section>
              </div> */}
              <div className="relative h-screen flex items-center justify-center">
                <img
                  src={
                    isDesktop
                      ? `/images/carousel/${index + 1}.jpeg`
                      : `/images/carousel/sm/${index + 1}.jpeg`
                  }
                  alt="Slide 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start py-52 px-4 md:px-16">
                  <h1 className="text-white text-3xl md:text-6xl font-bold flex flex-col  mb-40">
                    <span className="inline-flex ">
                      The <Icons.first className="size-20 ml-4 mr-2 -mt-4" />{" "}
                      Environment you
                    </span>
                    <span className="text-start">would imagine</span>
                  </h1>
                  <div className="mt-4">
                    <Progress className="h-1 w-1/2 mb-3" />
                    <p className="text-white text-xs md:text-xl  mb-8">
                      서울 청계천은 자연 그대로의 휴식과 재충전 공간이며,
                      점심시간과 퇴근길에 만나는 청계천의 여유로움은 <br />
                      CENTER1 입주자 및 이용객이 누릴 수 있는 특권입니다. <br />
                      이용자를 위한 감성적인 요소뿐만 아니라, 국내 최고 수준의
                      친환경 기준을 실천하여 국내외에서 친환경 건축물로
                      인증받았습니다.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-transparent py-4 px-6"
                    >
                      View More
                      <span>
                        <ChevronRight />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                <button
                  className={cn(
                    "w-9 h-1  rounded-full focus:outline-none",
                    count == index + 1 ? "bg-white" : "bg-gray-400"
                  )}
                ></button>
                <button
                  className={cn(
                    "w-9 h-1 rounded-full focus:outline-none",
                    count == index + 2 ? "bg-white" : "bg-gray-400"
                  )}
                ></button>
                <button
                  className={cn(
                    "w-9 h-1 rounded-full focus:outline-none",
                    count == index + 3 ? "bg-white" : "bg-gray-400"
                  )}
                ></button>
                <button
                  className={cn(
                    "w-9 h-1 rounded-full focus:outline-none",
                    count == index + 4 ? "bg-white" : "bg-gray-400"
                  )}
                ></button>
                <button
                  className={cn(
                    "w-9 h-1 rounded-full focus:outline-none",
                    count == index + 5 ? "bg-white" : "bg-gray-400"
                  )}
                ></button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
