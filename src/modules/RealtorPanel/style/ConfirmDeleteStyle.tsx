import styled from "styled-components";

export const StyledConfirmDelete = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    
    & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
    }
    
    & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    }
    
    @media (max-width: 570px) {
        h3 {
            font-size: 1.6rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`;