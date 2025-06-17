import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"
import { BadgeCheckIcon } from "lucide-react";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  tags,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  tags?: string[];
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
        <div className="flex mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 gap-1">
          {tags?.map((tag) => (
            <Badge
              variant="secondary"
              className="text-white bg-blue-600 hover:bg-blue-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
