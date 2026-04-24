import styles from "./pokemon-filter.module.css"

export const PokemonFilter = () =>{
    return(
        <div className={styles.container}>
            <input type="text" placeholder="Search a characters" /> 
        </div>
    );
};