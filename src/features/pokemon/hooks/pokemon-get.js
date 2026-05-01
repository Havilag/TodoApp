import { useEffect, useState } from "react"
import { PokemonService } from "../services/pokemon-service";
import { PokemonNav } from "./pokemon-nav";


const cache = {};

export const PokemonGet = () => {

    const {start, page, next, prev} = PokemonNav();

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);

    const limit = 10;

    
    useEffect( () => {
        if(cache[start]){
            setPokemon(cache[start]);
            setLoading(false);
            return;
        }

        setLoading(true);

        PokemonService({limit,start})
        .then((data) => {
            cache[start] = data;
            setPokemon(data);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    },[start]);

    
    return {
        pokemon,
        loading,
        error,
        nextPokemon: next,
        prevPokemon: prev
    };

};