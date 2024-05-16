import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../../../global/";
import { createFavorite } from "../api/apiFavorites";

export function useCreateFavorite() {
    const queryClient = useQueryClient();
    const { userId } = useUser();

    const { mutate, isLoading } = useMutation({
        mutationFn: ({apartmentId}) => createFavorite(userId, apartmentId),
        onSuccess: () => {
            toast.success("Apartment added to favorites");
            queryClient.invalidateQueries({ queryKey: ['favorites']});
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { addFavorite: mutate, isLoading };
}