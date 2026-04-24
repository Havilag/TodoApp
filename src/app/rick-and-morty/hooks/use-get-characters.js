import { useEffect, useState } from "react"
import { getCharacters } from "../services/get-characters";


export const useGetCharacters = () => {
    
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        getCharacters()
        .then(setCharacters)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    },)

    return {characters: characters.results, loading, error};
};