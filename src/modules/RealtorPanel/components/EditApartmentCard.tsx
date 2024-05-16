import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { Modal } from '../../../global/index.ts';
import { ApartmentProps } from "../../Apartments/";
import {Card, Content, Details, Price, Image, Title} from "../../Apartments/";
import { useDeleteApartment } from "../hooks/useDeleteApartment";
import useCreateApartment from "../hooks/useCreateApartment";
import ConfirmDelete from "./ConfirmDelete.tsx";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-primary);
  }

  & svg {
    margin-right: 0.5rem;
  }
`;

const EditApartmentCard: React.FC<ApartmentProps> = ({
                                                         apartments_id,
                                                         image,
                                                         title,
                                                         address,
                                                         price,
                                                         rooms,
                                                         area_size
                                                     }) => {
    const navigate = useNavigate();
    const { isLoading, mutate } = useDeleteApartment();
    const { createApartment } = useCreateApartment();

    const handleDuplicate = () => {
        createApartment({
            title: `Copy of ${title}`,
            realtor_id: apartments_id,
            description: title,
            image,
            area_size,
            rooms,
            price,
            address,
            year: new Date().getFullYear(),
            status: true
        });
    };

    const handleEdit = () => {
        navigate(`/realtor/${apartments_id}`);
    };

    return (
        <Card>
            <Image src={image} alt={title} />
            <Content>
                <Title>{address}</Title>
                <Price>${price} / month</Price>
                <Details>{rooms} rooms - {area_size} sqft</Details>
                <ButtonContainer>
                    <IconButton onClick={handleDuplicate}>
                        <HiSquare2Stack /> Duplicate
                    </IconButton>
                    <IconButton onClick={handleEdit}>
                        <HiPencil /> Edit
                    </IconButton>
                    <Modal>
                        <Modal.Open opens="delete">
                            <IconButton>
                                <HiTrash /> Delete
                            </IconButton>
                        </Modal.Open>
                        <Modal.Window name="delete">
                            <ConfirmDelete
                                resourceName="apartments"
                                disabled={isLoading}
                                onConfirm={() => mutate(apartments_id)}
                                onClose={() => {}}
                            />
                        </Modal.Window>
                    </Modal>
                </ButtonContainer>
            </Content>
        </Card>
    );
};

export default EditApartmentCard;
