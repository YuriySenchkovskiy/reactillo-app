import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {useUser} from "../../../global/";
import {Spinner} from "../../../global/";
import {Button} from "../../../global";
import {ButtonText} from "../../../global/";
import { useMoveBack } from "../../../global";
import useCreateApartment from "../hooks/useCreateApartment";
import Input from "../style/Input";
import FileInput from "../style/FileInput";
import {
    BackButtonContainer,
    ErrorMessage,
    FormRow,
    Label,
    StyledForm,
    StyledTextarea
} from "../style/CreateApartmentStyle.tsx";

function CreateApartmentForm() {
    const navigate = useNavigate();
    const moveBack = useMoveBack();
    const { isCreating, createApartment } = useCreateApartment();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userId } = useUser();

    const onSubmit = data => {
        const submitData = { ...data, image: data.image[0], realtor_id: userId };
        createApartment(submitData, {
            onSuccess: () => {
                reset();
                navigate(-1);
            }
        });
    };

    const onError = (errors) => {
        console.log('Form errors:', errors);
    };

    if (isCreating) return <Spinner />;

    return (
        <>
            <BackButtonContainer>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </BackButtonContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
                <FormRow>
                    <Label>Title</Label>
                    <Input {...register('title', { required: 'This field is required' })} />
                    {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Description</Label>
                    <StyledTextarea {...register('description')} />
                    {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Area Size (sqft)</Label>
                    <Input type="number" {...register('area_size', { required: 'This field is required' })} />
                    {errors.area_size && <ErrorMessage>{errors.area_size.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Rooms</Label>
                    <Input type="number" {...register('rooms', { required: 'This field is required' })} />
                    {errors.rooms && <ErrorMessage>{errors.rooms.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Price per month</Label>
                    <Input type="number" {...register('price', { required: 'This field is required' })} />
                    {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Address</Label>
                    <Input {...register('address')} />
                    {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Year Built</Label>
                    <Input {...register('year')} />
                    {errors.year && <ErrorMessage>{errors.year.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Status is available</Label>
                    <input
                        type="checkbox"
                        style={{ marginRight: 'auto' }}
                        {...register('status')}
                    />
                    {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Label>Image</Label>
                    <FileInput
                        accept="image/*"
                        {...register('image', {
                            required: 'This field is required'
                        })}
                    />
                    {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
                </FormRow>

                <FormRow>
                    <Button variation="secondary" type="reset" onClick={moveBack}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isCreating}>
                        Create Apartment
                    </Button>
                </FormRow>
            </StyledForm>
        </>
    );
}

export default CreateApartmentForm;
