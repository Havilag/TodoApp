import { Search } from "lucide-react";
import styles from "./pokemon-filter.module.css"
import { Pokemon } from "../../page/pokemon";


export const PokemonFilter = ({PokemonSearch}) =>{

    return(
        <div className={styles.container}>
            <input type="text" placeholder="Search a characters" onChange={(e) => PokemonSearch(e.target.value)} /> 
            <button className={styles.search}><Search /></button>
        </div>
    );
};