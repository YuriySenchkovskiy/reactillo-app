import styled from 'styled-components';

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 16px;
    margin: auto;
    
    @media (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr); 
    }
    
    @media (max-width: 570px) {
        grid-template-columns: 1fr; 
    }
`;

