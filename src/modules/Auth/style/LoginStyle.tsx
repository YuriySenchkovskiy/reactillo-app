import styled from "styled-components";
import Form from "./Form.tsx";

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  background-color: var(--color-grey-100);
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 550px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 40rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2rem;

  @media (max-width: 550px) {
    padding: 1rem;
  }
`;