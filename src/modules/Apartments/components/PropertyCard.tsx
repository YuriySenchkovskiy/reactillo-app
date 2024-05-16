import React from "react";
import { useNavigate } from "react-router-dom";
import {useRoutesNames, UserRole, useUser as useUserContext} from "../../../global";
import { FavoritesButton } from "../../Favorites";
import { ApartmentProps } from "../constants/AppartmentProps.tsx";
import { FlexContainerAround } from "../style/FlexContainer.tsx";
import {Image, Content, Title, Details, ClickableCard, ButtonContainer} from "../style/Card.tsx";

const PropertyCard: React.FC<ApartmentProps> = ({ apartments_id, address, image, title, price, rooms, area_size }) => {
    const { routes } = useRoutesNames();
    const navigate = useNavigate();
    const { userRole } = useUserContext();

    const handleDetails = () => {
        navigate(`${routes.detailsId}${apartments_id}`);
    };

    const handleFavoritesButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <ClickableCard onClick={handleDetails}>
            <Image src={image} alt={title} />
            <Content>
                <Title>{title}</Title>
                <Details>{address}</Details>
                <FlexContainerAround>
                    <Details>${price} / month</Details> |
                    <Details>{rooms} {rooms === 1 ? 'room' : 'rooms'}</Details> |
                    <Details>{area_size} sqft</Details>
                </FlexContainerAround>
                <ButtonContainer onClick={handleFavoritesButtonClick}>
                    {userRole === UserRole.USER &&(
                    <FavoritesButton apartments_id={apartments_id} />
                    )}
                </ButtonContainer>
            </Content>
        </ClickableCard>
    );
}

export default PropertyCard;
