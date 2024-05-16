import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import toast from "react-hot-toast";
import {FaAddressCard, FaBuilding, FaCalendar, FaRulerCombined} from "react-icons/fa";
import {RiPriceTag3Line} from "react-icons/ri";
import {useUser as useUserContext} from "../../../global/";
import {UserRole} from "../../../global";
import {Button} from "../../../global";
import {Spinner} from "../../../global/";
import {ButtonText, useMoveBack} from "../../../global/";
import {Empty} from "../../NotFoundPage";
import {FavoritesButton} from "../../Favorites";
import useApartments from "../hooks/useApartments.tsx";
import {FlexContainer} from "../style/FlexContainer.tsx";
import {Description, DetailsContainer, Image, InfoRow, SpecialHeading, Title,} from "../style/Details.tsx";

function PropertyDetails() {
    const { apartmentId } = useParams<{ apartmentId: string }>();
    const {isLoading, apartments} = useApartments();
    const moveBack = useMoveBack();
    const { userRole } = useUserContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleRequest = () => {
        toast.success('Thank you for your request! \n Realtor will contact you as soon as possible');
    };

    if(isLoading) return <Spinner />
    const apartment = apartments?.find(p => p?.apartments_id?.toString() === apartmentId);
    if(!apartment) return <Empty />

    return (
        <DetailsContainer>
            <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            <Title>{apartment.title}</Title>
            <Image src={apartment.image} alt={apartment.title}/>
            <InfoRow>
                <div><RiPriceTag3Line/> ${apartment.price} per month</div>
                <div><FaAddressCard/> {apartment.address}</div>
            </InfoRow>
            <InfoRow>
                <div><FaBuilding/> {apartment.rooms} {apartment.rooms === 1 ? 'room' : 'rooms'}</div>
                <div><FaCalendar/> Built in {apartment.year}</div>
                <div><FaRulerCombined/> {apartment.area_size} sqft</div>
            </InfoRow>
            <FlexContainer hasTwoButtons={userRole === UserRole.USER}>
                {userRole === UserRole.USER &&(
                    <FavoritesButton apartments_id={apartmentId} />
                )}
                <Button onClick={handleRequest}>Send request</Button>
            </FlexContainer>
            <SpecialHeading>What's special</SpecialHeading>
            <Description>{apartment.description}</Description>

        </DetailsContainer>
    );
}

export default PropertyDetails;