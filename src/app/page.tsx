import { CarouselSection } from "@/components/carousel-section";
import { Icons } from "@/components/icons";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

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
              <Card
                title="KF GALLERY"
                description="국내외 방문객에게 전시회, 문화 행사, 교육 프로그램들 개최 국제 교류를
          촉진하는 다양한 전시와 행사에 참여해보세요."
                imgPath="/images/kf-gallery.png"
                hasProgressBar={true}
                progressBarValue={50}
                className="md:pt-16 lg:pt-32"
              />
              <Card
                title="센터원 Wellness"
                description="피트니스, 골프GDR+, 필라테스, GX,스피닝, 사우나, PT(퍼스널트레이닝) 등 운영 
바쁜 일상과 업무에서 잠시 휴식을 취해보세요."
                imgPath="/images/wellness.png"
                hasProgressBar={true}
                progressBarValue={0}
                className="md:pt-8 lg:pt-16"
              />
              <Card
                title="SPARKPLUS"
                description="원하는 인원만큼 사용할 수 있는 맞춤형 
              오피스 일에만 집중할 수 있는 완벽한 공유 오피스를 만나보세요."
                imgPath="/images/sparkplus.png"
                hasProgressBar={true}
                progressBarValue={0}
                className=""
              />
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
              <Card
                title="프라임 서비스"
                description="임산부 휴게실/수유실 운영, 세차 서비스, 우편 배달 서비스 등
입주사 임직원을 위한 차별화된 서비스를 제공합니다."
                imgPath="/images/item-1.png"
                className="hover:-mt-10"
              />
              <Card
                title="E-pit 전기차 충전소"
                description="미래에셋센터원 주차장에는 전기차 이용자들을 위해
일반 충전소 외에도 E-pit 전기차 충전소가 마련되어 있습니다."
                imgPath="/images/item-2.png"
                className="hover:-mt-10"
              />
              <Card
                title="주차요금 할인"
                description="오피스,에비뉴 방문시 주차할인 혜택을 드리며 주말에는 
최대 8천원으로 부담없이 미래에셋센터원을 즐길 수 있습니다."
                imgPath="/images/item-3.png"
                className="hover:-mt-10"
              />
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

export interface CardProps {
  imgPath: string;
  title: string;
  description: string;
  hasProgressBar?: boolean;
  progressBarValue?: number;
  className?: string;
}

export const Card = (props: CardProps) => {
  const {
    imgPath,
    title,
    description,
    hasProgressBar = false,
    progressBarValue = 0,
    className,
  } = props;
  return (
    <div className={cn("text-white mb-16 overflow-hidden", className)}>
      <div className="relative mb-4">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div> */}
        <img src={imgPath} alt="Gallery" className="w-full h-56 object-cover" />
      </div>
      <div className="py-6">
        <h3
          className={cn(
            "text-4xl font-bold mb-4 font-heading capitalize",
            progressBarValue > 0 ? "text-primary" : ""
          )}
        >
          {/*  */}
          {title}
        </h3>
        <p className="text-secondary mb-4 text-lg text-left tracking-widest leading-7 hover:text-white">
          {/*  */}
          {description}
        </p>
      </div>
      {hasProgressBar && (
        <div>
          <Progress value={progressBarValue} className="h-1.5 rounded-none" />
        </div>
      )}
    </div>
  );
};
