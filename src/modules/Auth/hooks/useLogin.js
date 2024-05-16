import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginApi } from "../api/apiAuth.js";
import { UserRole } from "../../../global";
import { useUser } from "../../../global/";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setUser } = useUser();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            const userRole = user.isRealtor ? UserRole.REALTOR : UserRole.USER;
            setUser(user.user.id, userRole);
            navigate("/", { replace: true });
        },
        onError: (err) => {
            console.log("ERROR", err);
            toast.error("Provided email or password are incorrect");
        },
    });

    return { login, isLoading };
}
