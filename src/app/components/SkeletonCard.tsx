import { Skeleton } from "@/app/components/ui/skeleton";

type SkeletonSchemaProps = {
  grid: number;
};

const SkeletonCard = (props: SkeletonSchemaProps) => {
  const { grid } = props;

  return Array.from({ length: grid }).map((_, index) => {
    return (
      <div key={index} className="flex flex-col space-y-3  mt-4">
        <Skeleton className="h-[125px] w-[400px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[400px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div>
      </div>
    );
  });
};

export default SkeletonCard;
