import { cn } from "@/lib/utils";

interface IconButtonType {
  onClick: () => void;
  className?: string;
  icon: React.ReactElement;
}

const IconButton = (props: IconButtonType) => {
  const { onClick, className, icon } = props;
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full p-2 flex items-center bg-white border shadow-md hover:scale-125 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
