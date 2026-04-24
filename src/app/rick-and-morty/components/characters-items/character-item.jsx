
export const characterItems = ({ character}) => {
    
    const {id, name, status, type, gender, origin, location, imagen, url} = character;
    
    return (
        <div className="h-80 w-3xs bg-slate-700/50 rounded-lg px-6 py-2">
            <img src={image} alt={name} className="w-full h-44 rounded-lg"  />
            <h2 className="font-bold opacity-50 text-2xl">{name}</h2>          <h2>{character.name}</h2>
        </div>
    );
};