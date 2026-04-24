import { useGetCharacters } from "../hooks/use-get-characters"

export function RickAndortyPage(){

    const {characters, loading, error } = useGetCharacters();

    if(loading){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (<div className="flex gap-6  flex-wrap">
        {
            characters?.map((character) => {
                <characterItem character={character} />

            })
        }
        </div>
        )
}