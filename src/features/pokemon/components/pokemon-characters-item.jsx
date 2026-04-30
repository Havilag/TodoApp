
export const PokemonCharactersItem = ({ character }) => {
    const { name, abilities } = character;

    return (
        <div className="h-80 w-3xs bg-slate-700/50 rounded-lg px-6 py-2">
            <h2 className="font-bold opacity-50 text-2xl">{name}</h2>
            {
                abilities.map((item, index) => (
                    <p className="font-bold opacity-50 ">
                        {abilities}
                    </p>
                ))
            }

        </div>
    );
};