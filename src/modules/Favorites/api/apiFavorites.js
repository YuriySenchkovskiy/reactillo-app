import {supabase} from "../../../global/index.ts";

export async function createFavorite(userId, apartmentId) {
    const { data, error } = await supabase
        .from('favorites')
        .insert([
            { user_id: userId, apartment_id: apartmentId },
        ]);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function removeFavorite(userId, apartmentId) {
    const { data, error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', userId)
        .eq('apartment_id', apartmentId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getFavorites(userId) {
    const { data, error } = await supabase
        .from('favorites')
        .select('apartment_id')
        .eq('user_id', userId);

    if (error) {
        throw new Error(error.message);
    }

    return data.map(fav => fav.apartment_id);
}
