import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useRoutesNames } from "../../../global";
import {Spinner} from "../../../global/";
import { useUser as useUserContext } from "../../../global/";
import { UserRole } from "../../../global";
import {FullPage} from "../style/FullPage.tsx";

function ProtectedRoute() {
    const navigate = useNavigate();
    const { routes } = useRoutesNames();
    const { userId, userRole } = useUserContext();
    const isAuthenticated = userId !== null;
    const isLoading = false;

    useEffect(() => {
        if (!isAuthenticated && !isLoading && userRole !== UserRole.REALTOR) {
            navigate(routes.login);
        }
    }, [isAuthenticated, isLoading, navigate, routes.login, userRole]);

    if (isLoading) {
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );
    }

    return isAuthenticated && userRole === UserRole.REALTOR ? <Outlet /> : <Navigate to={routes.homepage} replace />;
}

export default ProtectedRoute;
