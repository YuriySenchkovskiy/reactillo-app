import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  
  &:not(:has(*)) {
    display: none;
  }
`;