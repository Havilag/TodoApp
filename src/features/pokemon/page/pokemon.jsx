import { StepBack, StepForward } from "lucide-react";
import { PokemonCharactersItem } from "../components/pokemon-characters-item";
import { PokemonGet } from "../hooks/pokemon-get";
import styles from "./pokemon.module.css"
import { useState } from "react";
import { PokemonFilter } from "../components/PokemonFilter/pokemon-filter";

export function Pokemon() {

    const { pokemon, loading, error, nextPokemon, prevPokemon } = PokemonGet();
    const [selectAbility, setAbility] = useState(null);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [pagina, SetPagina] = useState(1);

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    const FilterPokemon = pokemon.filter((texto) => 
        texto.name.includes(searchPokemon));

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

    const nextPagina = () => {
        nextPokemon();
        SetPagina(pagina + 1);
    };

    const prevPagina = () => {
        if (pagina > 1) {
            prevPokemon();
            SetPagina(pagina - 1);
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles["Pokemon-filter"]}>
                <PokemonFilter PokemonSearch={setSearchPokemon} />
            </header>

            <div className={styles["container-grid"]}>
                {FilterPokemon.length > 0 ? (
                    FilterPokemon.map((DatosPokemon) => (
                        <div key={DatosPokemon.id} className={styles.pokemonCard}>
                            <div className={styles["header-card"]}>
                                <h2>{DatosPokemon.name}</h2>
                            </div>

                            <div className={styles["pokemon-image"]}>
                                <img src={DatosPokemon.image} alt={DatosPokemon.name} />
                            </div>

                            <div className={styles["pokemmon-stat"]}>
                                <span>HP: {DatosPokemon.stats?.hp}</span>
                                <span>Peso: {DatosPokemon.weight}</span>
                                <span>Altura: {DatosPokemon.height}</span>
                            </div>

                            <div className={styles.description}>
                                <p>Ataque: {DatosPokemon.stats?.attack}</p>
                                <p>Defenza: {DatosPokemon.stats?.defense}</p>

                                <div className={styles.info}>
                                    <h3>Habilidades</h3>
                                    <ul>
                                        {DatosPokemon.abilities.map((ability, index) => (
                                            <li key={index}>{ability.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.noResults}>
                        <h2>No se encontraron resultados para "{searchPokemon}"</h2>
                    </div>
                )}
            </div>

            <div className={styles["container-button"]}>
                <button onClick={prevPagina}><StepBack /></button>
                <p className={styles.pagina}>{pagina}</p>
                <button onClick={nextPagina}><StepForward /></button>
            </div>

        </div>

    )
}