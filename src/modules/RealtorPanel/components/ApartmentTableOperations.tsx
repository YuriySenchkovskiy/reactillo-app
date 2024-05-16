import {TableOperations} from "../../../global/";
import {ApartmentFields, Filter, SortBy} from "../../../global";

function ApartmentTableOperations () {
    return (
        <TableOperations>
            <Filter filterField={ApartmentFields.Status} options={[
                {value: 'all', label: 'All'},
                {value: 'active', label: 'Active'},
                {value: 'inactive', label: 'Inactive'},
            ]}/>

            <SortBy options={[
                {value: 'price-asc', label: 'Sort by price (low first)'},
                {value: 'price-desc', label: 'Sort by price (high first)'},
                {value: 'rooms-asc', label: 'Sort by rooms (low first)'},
                {value: 'rooms-desc', label: 'Sort by rooms (high first)'},
                {value: 'area_size-asc', label: 'Sort by sqft (low first)'},
                {value: 'area_size-desc', label: 'Sort by sqft (high first)'},
            ]} />

        </TableOperations>
    )
}

export default ApartmentTableOperations;