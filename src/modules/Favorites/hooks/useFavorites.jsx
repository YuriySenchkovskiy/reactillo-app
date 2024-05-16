import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../global/";
import { getFavorites } from "../api/apiFavorites";

export function useFavorites() {
    const { userId } = useUser();

    const { data: favorites, isLoading, error} = useQuery({
        queryKey: ["favorites", userId],
        queryFn: () => getFavorites(userId),
    });

    return { favorites, isLoading, error };
}
