import { create } from "zustand";
import image from "../../assets/user.png"

export const userSection = create((set) => ({
    user: {
        name: "Hector Avila Gonzales",
        role: "Software Engineer",
        email: "hahector1505@gmail.com",
        avatar: image
    },
    setUser: (newUser) => set({user : newUser}),
}));

