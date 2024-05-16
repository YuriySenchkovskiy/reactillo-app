import toast from "react-hot-toast";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditApartments} from "../../Apartments";

function useCreateApartment() {
    const queryClient = useQueryClient();

    const {mutate: createApartment, isLoading} = useMutation({
        mutationFn: createEditApartments,
        onSuccess: () =>
        {
            toast.success('New apartment successfully created');
            queryClient.invalidateQueries({ queryKey: ['apartments']});
        },
        onError: (err) => toast.error(err.message),
    })

    return {createApartment, isLoading};
}

export default useCreateApartment;