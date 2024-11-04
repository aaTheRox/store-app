import { RadioGroup } from "@/app/components/ui/radio-group";
import useGetProductField from "../../../../../../api/getProductField";
import { RadioGroupItem } from "@/app/components/ui/radio-group";

import { Label } from "@/app/components/ui/label";
import { IFilterType } from "../../../../../../types/filters";
import { Checkbox } from "@/app/components/ui/checkbox";
import { buttonVariants } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";

type FilterSizesProps = {
    setFilterColor: (color: string) => void
}
let filteredColors: any = []

const FilterColors = (props: FilterSizesProps) => {
    const { setFilterColor } = props
    const { result, loading, error }: IFilterType = useGetProductField()

    
    function _setFilterColor(color: string) {
        const exists = filteredColors.filter((element: string) => element === color).length > 0;

        if (!exists) {
            filteredColors.push(color);
        }

        console.log(filteredColors)

        return filteredColors;
    }

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Color</p>
            {loading && result === null && (
                <p>Cargando...</p>
            )}

            <div className="space-y-1.5">

                {result !== null && (
                    result.schema.attributes.color.enum.map((color: any, index: string) => {
                        return (
                            <div key={index} className="flex items-center space-x-2">
                                <Checkbox onCheckedChange={() => _setFilterColor(color)} />
                                <Label htmlFor={index} className="uppercase">{color}</Label>
                            </div>
                        )
                    }
                    ))
                }

                <div className="space-y-5">
                    <Separator className="mt-2" />
                    <button onClick={() => _setFilterColor(filteredColors)} className={buttonVariants({ size: 'sm' })}>Aplicar filtro</button>


                </div>

            </div>

        </div>
    );
}

export default FilterColors;