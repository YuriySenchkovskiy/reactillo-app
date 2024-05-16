import styled, { css } from "styled-components";

type FormType = 'regular' | 'modal';

interface FormProps {
    type?: FormType;
}

const Form = styled.form<FormProps>`
    
  ${props => props.type === "regular" && css`
    max-width: 800px;      
    padding: 2.4rem 4rem;
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
  `}

  ${props => props.type === "modal" && css`
    width: 100%;
  `}

  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
    type: 'regular',
};

export default Form;
