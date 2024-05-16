export interface ApartmentProps {
    apartments_id?: number;
    realtor_id?: number;
    title: string;
    description?: string;
    image: string;
    area_size: number;
    rooms: number;
    price: number;
    address?: string;
    year?: string;
    status?: boolean;
}