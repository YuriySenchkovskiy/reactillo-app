import { useState } from "react";
import {Input} from "../../../global/";
import {Button} from "../../../global";
import {SpinnerMini} from "../../../global/";
import { useLogin } from "../hooks/useLogin";
import FormRowVertical from "../style/FormRowVertical";
import {LoginStyle, StyledForm, Title} from "../style/LoginStyle.tsx";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if(!email || !password) return;

        login({email, password}, {
            onSettled: () => {
                setEmail("");
                setPassword("");
            }
        });
    }

    return (
        <LoginStyle>
            <Title>Log in to your account</Title>
            <StyledForm onSubmit={handleSubmit}>
                <FormRowVertical label="Email address">
                    <Input
                        type="email"
                        id="email"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                        disabled={isLoading}
                    />
                </FormRowVertical>
                <FormRowVertical label="Password">
                    <Input
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                </FormRowVertical>
                <FormRowVertical>
                    <Button size="large" disabled={isLoading}>
                        {!isLoading ? "Log in" : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </StyledForm>
        </LoginStyle>
    );
}

export default LoginForm;
