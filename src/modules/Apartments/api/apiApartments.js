import {supabase, supabaseUrl} from "../../../global/index.ts";

export async function getApartments() {
    const { data, error } = await supabase
        .from('apartments')
        .select('*')

    if(error) {
        console.error(error);
        throw new Error('Apartments could not be loaded');
    }

    return data;
}

export async function getApartmentsById(userId) {
    const { data, error } = await supabase
        .from('apartments')
        .select('*')
        .eq('realtor_id', userId);

    if (error) {
        console.error(error);
        throw new Error('Apartments could not be loaded');
    }

    return data;
}

export async function createEditApartments(newApartment, id) {
    const hasImagePath = newApartment.image?.startsWith?.(`${supabaseUrl}`);

    const imageName = `${Math.floor(Math.random() * (100001 - 101) + 101)}-${newApartment.image?.name ?? "image.webp"}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagePath
        ? newApartment.image
        : `${supabaseUrl}/storage/v1/object/public/apartments/${imageName}`;

    // create apartments
    let query = supabase.from("apartments");

    // create
    if(!id) query = query.insert([{...newApartment, image: imagePath}]);

    // edit
    if (id) query = query.update({ ...newApartment, image: imagePath }).eq("apartments_id", id).select();

    const { data, error } = await query.select().single();

    if(error) {
        console.error(error);
        throw new Error('Apartments could not be created');
    }

    if(hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("apartments")
        .upload(imageName, id ? newApartment.image[0] : newApartment.image);

    if(storageError) {
        await supabase.from('apartments').delete().eq('apartments_id', data.apartments_id);
        console.error(storageError);
        throw new Error('Apartment image could not be uploaded and the apartment was not created');
    }

    return data;
}

export async function deleteApartment(id) {
    const { data, error } = await supabase
        .from('apartments')
        .delete()
        .eq('apartments_id', id)

    if(error) {
        console.error(error);
        throw new Error('Apartments could not be deleted');
    }

    return data;
}

export async function getApartment(id) {
    const { data, error } = await supabase
        .from("apartments")
        .select("*")
        .eq("apartments_id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Apartment not found");
    }

    return data;
}