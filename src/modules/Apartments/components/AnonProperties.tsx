import useApartments from "../hooks/useApartments.tsx";
import {useSearchParams} from "react-router-dom";
import {PAGE_SIZE, Pagination, Spinner} from "../../../global";
import {useEffect} from "react";
import {Empty} from "../../NotFoundPage";
import ApartmentTableOperations from "./ApartmentTableOperations.tsx";
import {EmptyApartmentField} from "../../RealtorPanel";
import {CardsContainer} from "../style/CardsContainer.tsx";
import PropertyCard from "./PropertyCard.tsx";
import {Footer} from "../style/Footer.tsx";

function AnonProperties() {
    const { isLoading, apartments } = useApartments();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.has('sortBy')) {
            searchParams.set('sortBy', 'price-asc');
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams]);

    const filteredApartments = apartments?.filter(el => el.status !== false);

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

 export default AnonProperties