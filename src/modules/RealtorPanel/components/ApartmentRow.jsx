import {useNavigate} from "react-router-dom";
import {HiPencil, HiSquare2Stack, HiTrash} from "react-icons/hi2";
import { Modal } from '../../../global/index.ts';
import {Menus} from "../../../global/";
import {Table} from "../../../global/";
import useCreateApartment from "../hooks/useCreateApartment";
import {useDeleteApartment} from "../hooks/useDeleteApartment.js";
import ConfirmDelete from "./ConfirmDelete.tsx";
import {Apartment, Img, TextCell} from "../style/ApartmentRowStyle.tsx";

function ApartmentRow({apartment}) {
    const {
        apartments_id,
        realtor_id,
        title,
        description,
        image,
        area_size,
        rooms,
        price,
        address,
        year,
        status
    } = apartment;

    const {isLoading, mutate} = useDeleteApartment();
    const {createApartment} = useCreateApartment();
    const navigate = useNavigate();

    function handleDuplicate() {
        createApartment({
            title: `Copy of ${title}`,
            realtor_id,
            description,
            image,
            area_size,
            rooms,
            price,
            address,
            year,
            status
        })
    }

    const handleEdit = () => {
        navigate(`/realtor/${apartments_id}`);
    };

    return (
        <Table.Row>
            <Img src={image}/>
            <Apartment>{title}</Apartment>
            <TextCell>{address}</TextCell>
            <TextCell>${price}</TextCell>
            <TextCell>{area_size} sqft</TextCell>
            <TextCell>{rooms} {rooms > 1 ? 'rooms' : 'room'}</TextCell>
            <TextCell>{status ? 'active' : 'inactive'}</TextCell>

            <Modal>
                <Menus.Menu>
                    <Menus.Toggle id={apartments_id}/>

                    <Menus.List id={apartments_id}>
                        <Menus.Button icon={<HiSquare2Stack/>} onClick={handleDuplicate}>
                            Duplicate
                        </Menus.Button>

                        <Menus.Button icon={<HiPencil/>} onClick={handleEdit}>Edit</Menus.Button>

                        <Modal.Open opens="delete">
                            <Menus.Button icon={<HiTrash/>}>Delete</Menus.Button>
                        </Modal.Open>
                    </Menus.List>

                    <Modal.Window name="delete">
                        <ConfirmDelete
                            resourceName="apartments"
                            disabled={isLoading}
                            onConfirm={() => mutate(apartments_id)}
                        />
                    </Modal.Window>
                </Menus.Menu>
            </Modal>
        </Table.Row>
    )
}

export default ApartmentRow;
