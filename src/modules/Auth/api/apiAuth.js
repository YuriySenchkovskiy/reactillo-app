import {supabase} from "../../../global/index.ts";

export async function signup({ fullName, email, password, isRealtor }) {
    const { data: existingUser, error: selectError } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single();

    if (selectError && selectError.code !== 'PGRST116') {
        console.error(selectError);
        throw new Error(selectError.message);
    }

    if (existingUser) {
        throw new Error('Email already exists');
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
            },
        },
    });

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    const userId = data?.user?.id;

    if (userId) {
        const { error: insertError } = await supabase
            .from('users')
            .insert([
                {
                    user_id: userId,
                    email,
                    isRealtor: isRealtor,
                },
            ]);

        if (insertError) {
            console.error(insertError);
            throw new Error(insertError.message);
        }
    } else {
        throw new Error('User ID not found after registration');
    }

    return data;
}

export async function login({email, password}) {

    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error)
        throw new Error(error.message);

    const { data: userData, error: userError } = await supabase
        .from('users')
        .select('isRealtor')
        .eq('email', email)
        .single();

    if (userError) {
        throw new Error(userError.message);
    }

    return {...data, isRealtor: userData.isRealtor};
}

export async function getCurrentUser() {
    const {data: session} = await supabase.auth.getSession();
    if(!session.session) return null;

    const {data, error} = await supabase.auth.getUser();
    if(error) throw new Error(error.message);

    return data?.user;

}

export async function logout() {
    const {error} = await supabase.auth.signOut();
    if(error) throw new Error(error.message);
}
