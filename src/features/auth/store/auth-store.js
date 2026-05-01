import { LogOut } from "lucide-react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const AuthenticationStore = create(
    persist((set) => ({
            accessToken: null,

            setToken: (newToken) => set({accessToken: newToken}),

            logout: () => set({ accessToken: null}),
        }),

        {
            name: "authentication-storage",
        },

    ),
);