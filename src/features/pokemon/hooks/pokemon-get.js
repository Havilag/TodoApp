import { useEffect, useState } from "react"
import { PokemonService } from "../services/pokemon-service";


export const PokemonGet = () => {

    const [start, SetStart] = useState(0);
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);

    const limit = 10;

    const nextPokemon  = () => {
        SetStart(prev => prev + 10);
    };

    const prevPokemon = () => {
        if(start > 9){
            SetStart(prev => prev - 10);
        }
        
    };


    useEffect( () => {
        PokemonService({limit,start})
        .then(setPokemon)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    },[start])

    return {
        pokemon,
        loading,
        error,
        nextPokemon,
        prevPokemon
    };

};