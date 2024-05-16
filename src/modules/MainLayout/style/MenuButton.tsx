import styled from "styled-components";

interface LogInButtonProps {
    dark?: boolean;
}

export const MenuButton = styled.button<LogInButtonProps>`
    background-color: ${props => !props.dark ? 'white' : 'var(--color-grey-0)'};
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1.8rem;
    color: var(--color-brand-600); 

    &:hover {
        background-color: var(--color-brand-600);
        color: var(--color-brand-50); 
    }

    &:hover:not(:disabled) {
        background-color: var(--color-brand-600);
        color: var(--color-brand-50);
    }
`;