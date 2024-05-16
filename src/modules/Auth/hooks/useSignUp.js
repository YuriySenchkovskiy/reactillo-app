import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {signup as signupApi} from "../api/apiAuth.js";

export function useSignUp() {
    const {mutate: signup, isLoading} = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user)
            toast.success("Account successfully created! " +
                "\nPlease verify the new account from the user's email address")
        },
        onError: (error) => {
            console.error(error);
            toast.error(error.message);
        },
    });

    return {signup, isLoading};
}