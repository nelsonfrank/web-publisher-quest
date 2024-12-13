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
