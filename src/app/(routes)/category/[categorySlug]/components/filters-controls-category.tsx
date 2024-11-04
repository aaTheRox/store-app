import FilterColors from "./filter-colors";
import FilterSizes from "./filter-sizes";

type FiltersControlsCategoryProps = {
    setFilterSize: (color: string) => void,
    setFilterColor: (color: string) => void,
}


const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterSize , setFilterColor} = props
    return ( 
        <div className="sm:w-[250px] sm:mt-5">
            <h2 className="text-md font-bold">Filtrar por </h2>
            <FilterSizes setFilterSize={setFilterSize} />
            <FilterColors setFilterColor={setFilterColor} />
        </div>
     );
}
 
export default FiltersControlsCategory;