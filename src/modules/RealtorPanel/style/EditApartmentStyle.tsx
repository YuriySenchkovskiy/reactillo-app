import styled from "styled-components";
import Textarea from "./Textarea.tsx";

export const StyledForm = styled.form`
  display: grid;
  gap: 2.4rem;
  padding: 2.4rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 1.6rem;
    gap: 1.2rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 500px) {
    gap: 0.8rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const ErrorMessage = styled.span`
  color: var(--color-red-700);
  font-size: 1.2rem;
`;

export const StyledTextarea = styled(Textarea)`
  width: 100%;
  max-width: 100%;
  height: 30rem;
  resize: none;

  @media (max-width: 500px) {
    height: 20rem;
  }
`;

export const BackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1.6rem;
    margin-left: 80px;

    @media (max-width: 867px) {
        margin-left: 0;
    }
`;