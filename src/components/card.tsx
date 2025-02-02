/* eslint-disable @next/next/no-img-element */
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "flex flex-col flex-grow-0 gap-6 self-stretch pb-10 h-[500px] w-[498.7px]",
        className
      )}
    >
      <img
        src={imgPath}
        alt="Gallery"
        className="w-[499px] h-[300px] object-fill"
      />
      <div className="py-4">
        <h3
          className={cn(
            "text-4xl font-bold mb-4 font-heading capitalize leading-[1.1] tracking-wider",
            progressBarValue > 0 ? "text-primary" : ""
          )}
        >
          {/*  */}
          {title}
        </h3>
        <p className="text-secondary text-xl text-left -tracking-[0.2px] leading-[1.6] hover:text-white">
          {/*  */}
          {description}
        </p>
      </div>
      {hasProgressBar && (
        <div>
          <Progress value={progressBarValue} className="h-1 rounded-none" />
        </div>
      )}
    </div>
  );
};
