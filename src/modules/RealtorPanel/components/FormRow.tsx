import React, { ReactNode, Children } from "react";
import {Label, StyledFormRow, Error} from "../style/FormRowStyle.tsx";

interface FormRowProps {
    label?: string;
    error?: string;
    children: ReactNode;
}

const FormRow: React.FC<FormRowProps> = ({ label, error, children }) => {
    const isCheckbox = Children.toArray(children).some(
        (child) => React.isValidElement(child) && child.props.type === 'checkbox'
    );

    return (
        <StyledFormRow className={isCheckbox ? 'checkbox-row' : ''}>
            {label && <Label htmlFor={(children as any).props.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
};

export default FormRow;
