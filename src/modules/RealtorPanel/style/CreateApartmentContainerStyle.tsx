import styled from "styled-components";

export const CreateApartmentContainerStyle = styled.div`
  margin: 2rem 0; 

  @media (max-width: 690px) {
    position: fixed;
    bottom: 1rem; 
    left: 50%;
    transform: translateX(-50%);
    width: 90%; 
    display: flex;
    justify-content: center;
    z-index: 1000;
  }
`;