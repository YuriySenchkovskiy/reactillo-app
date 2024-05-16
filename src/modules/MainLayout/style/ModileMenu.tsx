import styled from 'styled-components';

export const MobileMenu = styled.div<{ isOpen: boolean }>`
    display: none;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background-color: var(--color-grey-0);
    transform: translateX(${props => props.isOpen ? '0%' : '100%'});
    z-index: 2300;

    @media (max-width: 470px) {
        display: flex;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media (max-width: 470px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 4rem;
    }
`;