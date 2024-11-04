import { Menu } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"


const MenuListMobile = () => {
  return (
    <Popover>
      <PopoverTrigger><Menu /></PopoverTrigger>
      <PopoverContent>

      </PopoverContent>
    </Popover>
  )
}

export default MenuListMobile