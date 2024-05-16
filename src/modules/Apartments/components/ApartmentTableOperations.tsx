import {UserRole} from "../../../global";
import { useUser as useUserContext } from "../../../global/";
import {ApartmentFields, Filter, SortBy} from "../../../global";
import {LeftContainer, RightContainer, StyledTableOperations} from "../style/StyledTableOperations.tsx";

function ApartmentTableOperations() {
    const { userRole } = useUserContext();

    return (
        <StyledTableOperations>
            <LeftContainer>
                {userRole === UserRole.USER && (
                    <Filter
                        filterField={ApartmentFields.Status}
                        options={[
                            {value: 'all', label: 'All'},
                            {value: 'favorite', label: 'Favorite'},
                            {value: 'unfavorite', label: 'Not in favorite'},
                        ]}
                    />)
                }
            </LeftContainer>
            <RightContainer>
                <SortBy
                    options={[
                        {value: 'price-asc', label: 'Sort by price (low first)'},
                        {value: 'price-desc', label: 'Sort by price (high first)'},
                        {value: 'rooms-asc', label: 'Sort by rooms (low first)'},
                        {value: 'rooms-desc', label: 'Sort by rooms (high first)'},
                        {value: 'area_size-asc', label: 'Sort by sqft (low first)'},
                        {value: 'area_size-desc', label: 'Sort by sqft (high first)'},
                    ]}
                />
            </RightContainer>
        </StyledTableOperations>
    );
}

export default ApartmentTableOperations;
