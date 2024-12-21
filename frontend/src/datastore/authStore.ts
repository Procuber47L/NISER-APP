import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


type User = {
    username: string;
    email: string;
    id: number;
}

interface AuthStore {
    user: User | null;
    isAuthenticated: boolean;
    setUser: (user: User | null) => void; 
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    login: (username: string, password: string) => void;
}

export const useAuthStore = create<AuthStore, [["zustand/persist", unknown]]>(persist(
    (set) => ({
        user: null,
        isAuthenticated: false,
        setUser: (user) => set(() => ({ user })),
        setIsAuthenticated: (isAuthenticated) => set(() => ({ isAuthenticated })),
        login: (email, password) => {
    
            fetch("/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "email":email, "password":password })
            }).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        set(() => ({ user: data.user, isAuthenticated: true }));
                    });
                }
            })
        }
    }),{
        name: "auth-store",
        storage: createJSONStorage(() => localStorage),
    }
));
