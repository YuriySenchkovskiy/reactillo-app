import React from 'react';
import { useForm } from "react-hook-form";
import {Input} from "../../../global/";
import {Button} from "../../../global";
import { useSignUp } from "../hooks/useSignUp";
import {FormRow} from "../../RealtorPanel/";
import {SignUpStyle, StyledForm, Title} from "../style/SignUpStyle.tsx";

const SignupForm = () => {
    const { signup, isLoading } = useSignUp();
    const { register, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm();

    const onSubmit = ({ email, password, registerRealtor }) => {
        signup({ email, password, isRealtor: registerRealtor }, {
            onSettled: () => {
                reset();
            },
        });
    };

    return (
        <SignUpStyle>
            <Title>Register today for free</Title>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormRow label="Email address" error={errors?.email?.message}>
                    <Input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: "This field is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please provide a valid email address",
                            },
                            onChange: (e) => setValue('email', e.target.value.toLowerCase())
                        })}
                        disabled={isLoading}
                    />
                </FormRow>

                <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
                    <Input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: "This field is required",
                            minLength: {
                                value: 8,
                                message: "Passwords need a minimum of 8 characters",
                            },
                        })}
                        disabled={isLoading}
                    />
                </FormRow>

                <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
                    <Input
                        type="password"
                        id="passwordConfirm"
                        {...register('passwordConfirm', {
                            required: "This field is required",
                            validate: (value) => value === getValues().password || "Passwords need to match",
                        })}
                        disabled={isLoading}
                    />
                </FormRow>

                <FormRow className="checkbox-row">
                    <label htmlFor="registerRealtor">Register as a Realtor</label>
                    <Input
                        type="checkbox"
                        id="registerRealtor"
                        {...register('registerRealtor')}
                        disabled={isLoading}
                    />
                </FormRow>

                <FormRow>
                    <Button disabled={isLoading}>Create new user</Button>
                </FormRow>
            </StyledForm>
        </SignUpStyle>
    );
};

export default SignupForm;
