import { createContext, useContext, ReactNode } from "react";

interface RouteNames {
    homepage: string;
    login: string;
    register: string;
    details: string;
    detailsId: string;
    favorite: string;
    realtor: string;
    editId: string;
    create: string;
    policies: string;
    notExist: string;
}

const RouteNamesContext = createContext<{ routes: RouteNames } | undefined>(undefined);

const routes: RouteNames = {
    homepage: "/",
    login: 'login',
    register: 'register',
    details: "apartment/:apartmentId",
    detailsId: "apartment/",
    favorite: "favorite/",
    realtor: "realtor/",
    editId: "realtor/:apartmentId",
    create: "/realtor/create/",
    policies: "privacy",
    notExist: "/*",
};

interface RouteNamesProviderProps {
    children: ReactNode;
}

function RouteNamesProvider({ children }: RouteNamesProviderProps) {
    return (
        <RouteNamesContext.Provider value={{ routes }}>
            {children}
        </RouteNamesContext.Provider>
    );
}

function useRoutesNames() {
    const context = useContext(RouteNamesContext);
    if (!context) {
        throw new Error("RouteNamesContext was used outside of RouteProvider");
    }
    return context;
}

export { RouteNamesProvider, useRoutesNames };
