import {ApartmentProps} from "../../Apartments/";
import EditApartmentCard from "./EditApartmentCard.tsx";
import {CardsContainer} from "../style/CardContainer.tsx";

interface MobileTableProps {
    data: ApartmentProps[];
}

const MobileTable: React.FC<MobileTableProps> = ({ data }) => {
    return (
        <CardsContainer>
            {data.map(apartment => (
                <EditApartmentCard
                    key={apartment.apartments_id}
                    apartments_id={apartment.apartments_id}
                    image={apartment.image}
                    title={apartment.title}
                    price={apartment.price}
                    rooms={apartment.rooms}
                    area_size={apartment.area_size}
                />
            ))}
        </CardsContainer>
    );
 }

 export default MobileTable;