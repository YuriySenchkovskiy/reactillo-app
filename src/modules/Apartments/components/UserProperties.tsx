import useApartments from "../hooks/useApartments.tsx";
import {useSearchParams} from "react-router-dom";
import {ApartmentFields, PAGE_SIZE, Pagination, Spinner} from "../../../global";
import {useFavorites} from "../../Favorites";
import {useEffect} from "react";
import {ApartmentProps} from "../constants/AppartmentProps.tsx";
import {Empty} from "../../NotFoundPage";
import ApartmentTableOperations from "./ApartmentTableOperations.tsx";
import {EmptyApartmentField} from "../../RealtorPanel";
import {CardsContainer} from "../style/CardsContainer.tsx";
import PropertyCard from "./PropertyCard.tsx";
import {Footer} from "../style/Footer.tsx";

function UserProperties() {
    const { isLoading, apartments } = useApartments();
    const [searchParams, setSearchParams] = useSearchParams();
    const { favorites } = useFavorites();

    useEffect(() => {
        if (!searchParams.has('sortBy')) {
            searchParams.set('sortBy', 'price-asc');
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams]);

    let filteredApartments: ApartmentProps[] | undefined;

    const filterValue = searchParams.get(ApartmentFields.Status) || 'all';
    if (filterValue === "all") {
        filteredApartments = apartments?.filter(el => el.status !== false);
    } else if (filterValue === "favorite") {
        filteredApartments = apartments?.filter(apartment => favorites?.includes(apartment.apartments_id));
    } else if (filterValue === 'unfavorite') {
        filteredApartments = apartments?.filter(apartment => !favorites?.includes(apartment.apartments_id) && apartment.status !== false);
    }

    // sort
    const sortBy = searchParams.get('sortBy') || 'startDate-asc';
    const [field, direction] = sortBy.split("-");
    const modifier = direction === 'asc' ? 1 : -1;
    const sortedApartments = filteredApartments?.sort((a, b) => (a[field] - b[field]) * modifier);

    // pagination
    const currentPage = parseInt(searchParams.get('page') || '1', 10);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedQuestions = sortedApartments?.slice(startIndex, endIndex);

    if (isLoading) return <Spinner />;
    if (!apartments) return <Empty />;

    return (
        <>
            <ApartmentTableOperations />

            {(!sortedApartments?.length || !filteredApartments?.length) ? (
                <EmptyApartmentField />
            ) : (
                <>
                    <CardsContainer>
                        {paginatedQuestions?.map(apartment => (
                            <PropertyCard
                                key={apartment.apartments_id}
                                apartments_id={apartment.apartments_id}
                                address={apartment.address}
                                image={apartment.image}
                                title={apartment.title}
                                price={apartment.price}
                                rooms={apartment.rooms}
                                area_size={apartment.area_size}
                            />
                        ))}
                    </CardsContainer>
                    <Footer>
                        <Pagination count={sortedApartments?.length ? sortedApartments.length : 0} />
                    </Footer>
                </>
            )}
        </>
    );
 }

 export default UserProperties