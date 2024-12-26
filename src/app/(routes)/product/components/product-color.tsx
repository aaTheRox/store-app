import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useRouter } from "next/navigation";
import product from "../../../../../backend/src/api/product/controllers/product";

const ProductColor = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="white">Blanco</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProductColor;
