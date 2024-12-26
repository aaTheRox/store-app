import { Menu } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/app/components/ui/popover";

const MenuListMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};

export default MenuListMobile;
