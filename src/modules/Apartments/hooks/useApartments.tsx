import { useQuery } from "@tanstack/react-query";
import { getApartments as  getApartmentsApi} from "../api/apiApartments";
import {ApartmentProps} from "../constants/AppartmentProps.tsx";

function useApartments() {
    const { isLoading, data: apartments, error } = useQuery<ApartmentProps[], Error>({
        queryKey: ['apartments'],
        queryFn: getApartmentsApi
    });

    return { isLoading, apartments, error };
}

export default useApartments;
