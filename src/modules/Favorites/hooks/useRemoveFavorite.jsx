import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../../../global/";
import { removeFavorite } from "../api/apiFavorites";

export function useRemoveFavorite() {
    const queryClient = useQueryClient();
    const { userId } = useUser();

    const { mutate, isLoading } = useMutation({
        mutationFn: ({ apartmentId }) => removeFavorite(userId, apartmentId),
        onSuccess: () => {
            toast.success("Apartment removed from favorites");
            queryClient.invalidateQueries({ queryKey: ['favorites'] });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { removeFavorite: mutate, isLoading };
}
