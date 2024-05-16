import {useSearchParams} from "react-router-dom";
import {Spinner} from "../../../global/";
import {Table} from "../../../global/";
import {Menus} from "../../../global/";
import ApartmentRow from "./ApartmentRow.jsx";
import EmptyApartmentField from "./EmptyApartmentField.tsx";
import {useEffect, useState} from "react";
import MobileTable from "./MobileTable.tsx";
import {ApartmentFields, Pagination} from "../../../global";
import {PAGE_SIZE} from "../../../global";
import useApartmentsById from "../../Apartments/hooks/useApartmentsById.tsx";
import {ApartmentProps} from "../../Apartments/constants/AppartmentProps.tsx";
import {MOBILE_SIZE} from "../../../global";

function ApartmentTable () {
    const { isLoading, apartments } = useApartmentsById();
    const [searchParams] = useSearchParams();
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_SIZE);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 690);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if(isLoading) return <Spinner />

    // filter
    const filterValue = searchParams.get(ApartmentFields.Status) || 'all';
    let filteredApartments;
    if(filterValue === "all") filteredApartments = apartments;
    else if(filterValue === "active") filteredApartments =
        apartments?.filter(el =>
            el.status === true);
    else if(filterValue === 'inactive') filteredApartments =
        apartments?.filter(el =>
            el.status === false);

    // sort
    const sortBy = searchParams.get('sortBy') || 'startDate-asc';
    const [field, direction] = sortBy.split("-");
    const modifier = direction === 'asc' ? 1 : -1;
    const sortedApartments = filteredApartments.sort((a, b) => (a[field] - b[field]) * modifier);

    // pagination
    const currentPage = parseInt(searchParams.get('page') || '1', 10);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedQuestions = sortedApartments.slice(startIndex, endIndex);

    if(!apartments) return <EmptyApartmentField />
    if(!filteredApartments.length) return <EmptyApartmentField />
    if(!sortedApartments.length) return <EmptyApartmentField />

    return (
        <>
            {isMobile ? (
                <MobileTable data={paginatedQuestions} />
            ) : (
                <Menus>
                    <Table columns="0.6fr 1.6fr 1.8fr 1fr 1fr 1fr 1fr 0.2fr">
                        <Table.Header>
                            <div></div>
                            <div>Title</div>
                            <div>Address</div>
                            <div>Price</div>
                            <div>Size</div>
                            <div>Rooms</div>
                            <div>Status</div>
                            <div></div>
                        </Table.Header>

                        <Table.Body
                            data={paginatedQuestions}
                            render={(apartment: ApartmentProps) => (
                                <ApartmentRow key={apartment.apartments_id} apartment={apartment} />
                            )}
                        />
                    </Table>
                </Menus>
                )
            }
            <Table.Footer>
                <Pagination count={sortedApartments.length} />
            </Table.Footer>
        </>
    )
}

export default ApartmentTable;