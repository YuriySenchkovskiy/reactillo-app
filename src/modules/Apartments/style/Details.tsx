import styled from 'styled-components';

export const DetailsContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2.6rem;
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    background: var(--color-grey-50);
    color: var(--color-grey-900);
    
    @media (max-width: 550px) {
        padding: 0;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 5px;
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: 2.4rem;
    color: var(--color-grey-800);
    
    @media (max-width: 920px) {
        font-size: 3rem;
    }
    
    @media (max-width: 570px) {
        font-size: 2rem;
    }
`;

export const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 1.6rem;
    svg {
    margin-right: 8px;
    }

    @media (max-width: 920px) {
        font-size: 1.6rem;
    }

    @media (max-width: 570px) {
        font-size: 1.2rem;
    }
`;

export const SpecialHeading = styled.h2`
    margin-top: 20px;
    color: var(--color-grey-700);
    font-size: 2.4rem;

    @media (max-width: 920px) {
        font-size: 3rem;
    }

    @media (max-width: 570px) {
        font-size: 2rem;
    }
`;

export const Description = styled.p`
    font-size: 1.4rem;
    line-height: 1.8;
    color: var(--color-grey-600);
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
    margin-right: 5px;
    }
    &:hover {
    background: var(--color-indigo-700);
    }
`;
