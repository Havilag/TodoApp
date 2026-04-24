import { StepBack, StepForward } from "lucide-react";
import { PokemonCharactersItem } from "../components/pokemon-characters-item";
import { PokemonGet } from "../hooks/pokemon-get";
import styles from "./pokemon.module.css"
import { useState } from "react";
import { PokemonFilter } from "../components/PokemonFilter/pokemon-filter";

export function Pokemon() {

    const { pokemon, loading, error, nextPokemon, prevPokemon } = PokemonGet();
    const [selectAbility, setAbility] = useState(null);


    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    const GetAbility = async (url) => {
        try {
            const data = await PokemonGetAbility(url);
            setAbility(data)
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <div className={styles.container}>
            <header className={styles["Pokemon-filter"]}>
                <PokemonFilter />
            </header>

            <div className={styles["container-grid"]}>
                {
                    pokemon.map((DatosPokemon) => (

                        <div className={styles.pokemonCard}>
                            <div className={styles["header-card"]}>
                                <h2>{DatosPokemon.name}</h2>
                            </div>

                            <div className={styles["pokemon-image"]}>
                                <img src={DatosPokemon.image} />
                            </div>

                            <div className={styles["pokemmon-stat"]}>
                                <span>HP: {DatosPokemon.stats?.hp}</span>
                                <span>Peso: {DatosPokemon.weight}</span>
                                <span>Altura: {DatosPokemon.height}</span>
                            </div>

                            <div className={styles.description}>
                                <p>Ataque: {DatosPokemon.stats.attack}</p>
                                <p>Defenza: {DatosPokemon.stats.defense}</p>

                                <div className={styles.info}>
                                    <h3>Habilidades</h3>
                                    <ul>
                                        {DatosPokemon.abilities.map((ability, index) => (
                                            <li key={index}>
                                                {ability.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            
            <div className={styles["container-button"]}>
                <button onClick={prevPokemon}><StepBack /></button>
                <button onClick={nextPokemon}><StepForward /></button>
            </div>

        </div>

    )
}