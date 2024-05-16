import styled from "styled-components";

export const StyledMenu = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 470px) {
        display: none;
    }
`;