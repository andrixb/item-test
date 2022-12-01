import { useFavorites } from "../../infrastructure/hooks";

export const ListFavorites = () => {
    const { favorites } = useFavorites();
    console.log(favorites);
    return (<></>)

}