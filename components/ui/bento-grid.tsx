import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"
import { BadgeCheckIcon, ExternalLink, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  url,
  githubUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  tags?: string[];
  icon?: React.ReactNode;
  url?: string;
  githubUrl?: string;
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
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 flex justify-between items-center">
          {title}
          <div className="flex gap-2">
            {githubUrl && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
                      className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 text-white hover:text-gray-200" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 text-white border-gray-600 mb-2">
                    <p>View on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {url && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
                      className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 text-white hover:text-gray-200" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-blue-600 text-white border-blue-500 mb-2">
                    <p>Open in new tab</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
        <div className="flex flex-wrap mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 gap-1">
          {tags?.map((tag) => (
            <Badge
              variant="secondary"
              className="text-white bg-blue-600 hover:bg-blue-700"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
