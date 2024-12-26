import { RadioGroup } from "@/app/components/ui/radio-group";
import useGetProductField from "../../../../../../api/getProductField";
import { RadioGroupItem } from "@/app/components/ui/radio-group";

import { Label } from "@/app/components/ui/label";
import { IFilterType } from "../../../../../../types/filters";

type FilterSizesProps = {
    setFilterSize: (color: string) => void
}

const FilterSizes = (props: FilterSizesProps) => {
    const { setFilterSize } = props
    const { result, loading, error }: IFilterType = useGetProductField()

    return (
        <section className="my-2">
            <p className="mb-3 font-bold">Talla</p>
            {loading && result === null && (
                <p>Cargando...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterSize(value)}>
                {result !== null && (
                    result.schema.attributes.size.enum.map((color: any, index: string) => {
                        return (
                            <div key={index} className="flex items-center space-x-2">

                                <RadioGroupItem id={index} value={color} />
                                <Label htmlFor={index} className="uppercase">{color}</Label>
                            </div>
                        )
                    }
                    ))
                }
            </RadioGroup>
        </section>
    );
}

export default FilterSizes;