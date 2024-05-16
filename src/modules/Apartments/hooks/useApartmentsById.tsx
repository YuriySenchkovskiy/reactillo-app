import { useQuery } from "@tanstack/react-query";
import { useUser as useUserContext } from "../../../global/";
import { getApartmentsById } from "../api/apiApartments";
import { ApartmentProps } from "../constants/AppartmentProps.tsx";

function useApartmentsById() {
    const { userId } = useUserContext();

    const { isLoading, data: apartments, error } = useQuery<ApartmentProps[], Error>({
        queryKey: ['apartments', userId],
        queryFn: () => getApartmentsById(userId!),
        enabled: !!userId
    });

    return { isLoading, apartments, error };
}

export default useApartmentsById;
