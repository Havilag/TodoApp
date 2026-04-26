export const PokemonService = async ({ limit = 10, start = 0 }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${start}`);

    if (!response.ok){
        throw new Error("Failed");
    }

    const Data = await response.json();

    const PokemonData = Data.results.map(async (PokemonDetails) => {
        const res = await fetch(PokemonDetails.url);
        const detail = await res.json();

        return{
            id: detail.id,
            name: detail.name,
            weight: detail.weight / 10,
            height: detail.height / 10,
            image: detail.sprites.other["official-artwork"].front_default,
            abilities: detail.abilities.map(detailAbility => ({ name: detailAbility.ability.name })),
            stats: {
                hp: detail.stats[0].base_stat,
                attack: detail.stats[1].base_stat,
                defense: detail.stats[2].base_stat,
            },
            type: detail.types[0].type.name
        };
    });

    return await Promise.all(PokemonData);
};