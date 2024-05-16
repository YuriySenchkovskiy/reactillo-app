import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserRole } from "../consts/roles.ts";

interface UserContextType {
    userId: string | null;
    userRole: UserRole;
    setUser: (userId: string, userRole: UserRole) => void;
    clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userId, setUserId] = useState<string | null>(sessionStorage.getItem('userId'));
    const [userRole, setUserRole] = useState<UserRole>(() => {
        const savedRole = sessionStorage.getItem('userRole');
        return savedRole ? (savedRole as UserRole) : UserRole.ANONYMOUS;
    });

    const setUser = (id: string, role: UserRole) => {
        setUserId(id);
        setUserRole(role);
        sessionStorage.setItem('userId', id);
        sessionStorage.setItem('userRole', role);
    };

    const clearUser = () => {
        setUserId(null);
        setUserRole(UserRole.ANONYMOUS);
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userRole');
    };

    useEffect(() => {
        const savedUserId = sessionStorage.getItem('userId');
        const savedUserRole = sessionStorage.getItem('userRole') as UserRole;

        if (savedUserId) {
            setUserId(savedUserId);
            setUserRole(savedUserRole);
        }
    }, []);

    return (
        <UserContext.Provider value={{ userId, userRole, setUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
