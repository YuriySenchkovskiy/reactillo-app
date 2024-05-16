import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {logout as logoutApi} from "../../Auth/api/apiAuth.js";
import {useUser} from "../../../global/";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { clearUser } = useUser();

    const {mutate: logout, isLoading} = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            clearUser();
            navigate("/", {replace: true})
        }
    })

    return {logout, isLoading};
}