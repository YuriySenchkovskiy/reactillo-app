import styled from "styled-components";

export const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

export const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  &.checkbox-row {
    grid-template-columns: auto 1fr;
    align-items: start;
    gap: 1rem;

    label {
      order: 2;
      margin-left: 1rem;
    }

    input[type="checkbox"] {
      order: 1;
      margin-left: 0;
    }
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;