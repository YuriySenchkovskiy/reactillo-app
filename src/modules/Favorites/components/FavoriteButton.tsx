import {Button} from "../../../global";
import {SpinnerMini} from "../../../global/";
import {useFavorites} from "../hooks/useFavorites";
import {useCreateFavorite} from "../hooks/useCreateFavorite";
import {useRemoveFavorite} from "../hooks/useRemoveFavorite";

function FavoriteButton({apartments_id}) {
    const {favorites} = useFavorites();
    const { addFavorite, isLoading: isAddingFavorite } = useCreateFavorite();
    const { removeFavorite, isLoading: isRemovingFavorite} = useRemoveFavorite();

    const handleAddFavorite = () => {
        if (apartments_id) {
            // @ts-ignore
            addFavorite({ apartmentId: apartments_id });
        }
    };

    const handleRemoveFavorite = () => {
        if (apartments_id) {
            // @ts-ignore
            removeFavorite({ apartmentId: apartments_id });
        }
    };

    const isFavorite = favorites?.includes(apartments_id);

    return (
        <>
            <Button onClick={!isFavorite ? handleAddFavorite : handleRemoveFavorite} variation={!isFavorite ? 'primary' : 'green'}>
                {isAddingFavorite || isRemovingFavorite ? <SpinnerMini /> : (!isFavorite ? 'Add to favorite' : 'Remove from favorite')}
            </Button>
        </>
    )
 }

 export default FavoriteButton