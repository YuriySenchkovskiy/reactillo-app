import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {Spinner} from "../../../global/";
import {Button} from "../../../global";
import {ButtonText} from "../../../global/";
import { useMoveBack } from "../../../global";
import useApartments from "../../Apartments/hooks/useApartments";
import { Empty } from "../../NotFoundPage/index.ts";
import useEditApartment from "../hooks/useEditApartment";
import {BackButtonContainer, ErrorMessage, StyledTextarea, FormRow, Label, StyledForm} from "../style/EditApartmentStyle.tsx";
import Input from "../style/Input";
import FileInput from "../style/FileInput";

function EditApartmentForm() {
    const { apartmentId } = useParams();
    const navigate = useNavigate();
    const moveBack = useMoveBack();
    const { apartments, isLoading } = useApartments();
    const { isEditing, editApartment } = useEditApartment();

    const apartmentToEdit = apartments?.find(ap => ap.apartments_id.toString() === apartmentId);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: apartmentToEdit
    });

    if (isLoading) return <Spinner />;
    if (!apartmentToEdit) return <Empty />;

    const onSubmit = data => {
        editApartment({ newApartmentData: data, id: apartmentId }, {
            onSuccess: () => {
                reset();
                navigate(-1);
            }
        });
    };

    const onError = (errors) => {
        console.log('Form errors:', errors);
    };

    return (
        <>
            <BackButtonContainer>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </BackButtonContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
                <FormRow>
                    <Label>Title</Label>
                    <Input disabled={isEditing} {...register('title', { required: 'This field is required' })} />
                    {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Description</Label>
                    <StyledTextarea disabled={isEditing} {...register('description')} />
                    {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Area Size (sqft)</Label>
                    <Input type="number" disabled={isEditing} {...register('area_size', { required: 'This field is required' })} />
                    {errors.area_size && <ErrorMessage>{errors.area_size.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Rooms</Label>
                    <Input type="number" disabled={isEditing} {...register('rooms', { required: 'This field is required' })} />
                    {errors.rooms && <ErrorMessage>{errors.rooms.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Price per month</Label>
                    <Input type="number" disabled={isEditing} {...register('price', { required: 'This field is required' })} />
                    {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Address</Label>
                    <Input disabled={isEditing} {...register('address')} />
                    {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Year Built</Label>
                    <Input disabled={isEditing} {...register('year')} />
                    {errors.year && <ErrorMessage>{errors.year.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Status is available</Label>
                    <input
                        disabled={isEditing}
                        type="checkbox"
                        style={{ marginRight: 'auto' }}
                        {...register('status')}
                    />
                    {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Image</Label>
                    <FileInput
                        disabled={isEditing}
                        accept="image/*"
                        {...register('image')}
                    />
                    {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Button variation="secondary" type="reset" onClick={moveBack}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isEditing}>
                        Edit Apartment
                    </Button>
                </FormRow>
            </StyledForm>
        </>
    );
}

export default EditApartmentForm;