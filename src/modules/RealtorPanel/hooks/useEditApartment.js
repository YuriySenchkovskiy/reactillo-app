import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {createEditApartments} from "../../Apartments";

function useEditApartment () {
    const queryClient = useQueryClient();

    const {mutate: editApartment, isLoading: isEditing} = useMutation({
        mutationFn: ({newApartmentData, id}) => createEditApartments(newApartmentData, id),
        onSuccess: () =>
        {
            toast.success('Apartment successfully edited');
            queryClient.invalidateQueries({ queryKey: ['apartments']});
        },
        onError: (err) => toast.error(err.message),
    });

    return {editApartment, isEditing};
}

export default useEditApartment;