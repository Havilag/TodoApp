import { create } from "zustand";
import { persist } from "zustand/middleware";


export const PokemonNav = create(
    persist((set) => ({
            start: 0,
            page: 1,

            next: () => set((state) => ({
                start: state.start + 10,
                page: state.page + 1
            })),

            prev: () => set((state) => {
                if (state.start > 0) {
                    return {
                        start: state.start - 10,
                        page: state.page - 1
                    };
                }
                return state;
            }),
        }), 
        {
            name: "pokemon-pag-nav", 
        }
    ) 
); 