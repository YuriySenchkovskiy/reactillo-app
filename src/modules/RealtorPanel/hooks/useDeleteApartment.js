import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteApartment} from "../../Apartments";

export function useDeleteApartment() {
    const queryClient = useQueryClient();

    const {isLoading, mutate} =  useMutation({
        mutationFn: deleteApartment,
        onSuccess: () => {
            toast.success("Apartment successfully deleted")

            queryClient.invalidateQueries({
                queryKey: ['apartments'],
            })
        },

        onError: (err) => toast.error(err.message)
    });

    return { isLoading, mutate };
}
