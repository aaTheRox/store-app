import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

const sortingOptions = [
    {label: 'Novedad', key: 'new'},
    {label: 'Mayor precio', key: 'priceDES'},
    {label: 'Menor precio', key: 'priceASC'},
]
const FilterSorting = () => {
    return (
        <div className="flex flex-row gap-0">
            <div className="bg-primary text-white px-2 py-1 font-bold leading-8">Ordenar por</div>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccion" />
                </SelectTrigger>
                <SelectContent>
                    {sortingOptions.map(({label, key}) => (
                        <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    );
}

export default FilterSorting;