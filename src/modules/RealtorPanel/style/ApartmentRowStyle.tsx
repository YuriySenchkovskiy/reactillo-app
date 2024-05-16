import styled from "styled-components";

export const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

export const Apartment = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

export const TextCell = styled.div`
    font-family: "Sono";
    font-weight: 500;
    color: var(--color-grey-600);
`;