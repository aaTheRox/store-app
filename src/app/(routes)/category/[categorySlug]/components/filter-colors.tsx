import { RadioGroup } from "@/app/components/ui/radio-group";
import useGetProductField from "../../../../../../api/getProductField";
import { RadioGroupItem } from "@/app/components/ui/radio-group";

import { Label } from "@/app/components/ui/label";
import { IFilterType } from "../../../../../../types/filters";
import { Checkbox } from "@/app/components/ui/checkbox";
import { buttonVariants } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import IProductType from "../../../../../../types/product";
import { useEffect, useState } from "react";

type FilterColorsProps = {
  setFilterColor: (color: string) => void;
  product: IProductType;
};
let filteredColors: any = [];

const FilterColors = (props: FilterColorsProps) => {
  const { result, loading, error }: IFilterType = useGetProductField();

  const { setFilterColor, product } = props;
  const [filteredColors, setFilteredColors] = useState(
    result?.schema.attributes.color.enum
  );

  function _setFilterColor() {}

  useEffect(() => {
    setFilteredColors(result?.schema.attributes.color.enum);
    // Aquí lanzas tu evento o ejecutas código al montar el componente
    const notFilteredColors = result?.schema.attributes.color.enum;
    let filtered;

    console.log(filteredColors);
    product?.forEach((prod: IProductType) => {
      const filtered = notFilteredColors?.filter((element) =>
        filteredColors?.includes(prod.color)
      );
    });
  }, [product]);

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Color</p>
      {loading && result === null && <p>Cargando...</p>}

      <div className="space-y-1.5">
        {result !== null &&
          filteredColors &&
          filteredColors.map((color: any, index: string) => {
            return (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox onCheckedChange={() => _setFilterColor()} />
                <Label htmlFor={index} className="uppercase">
                  {color}
                </Label>
              </div>
            );
          })}
        <div className="space-y-5">
          <Separator className="mt-2" />
          <button
            onClick={() => _setFilterColor()}
            className={buttonVariants({ size: "sm" })}
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterColors;
