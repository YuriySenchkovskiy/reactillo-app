import React from 'react';
import StyledSelect from "../style/StyledSelect";

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    [propName: string]: unknown;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, ...props }) => {
    return (
        <StyledSelect
            value={value}
            onChange={onChange}
            {...props}
        >
            {options.map(option => (
                <option key={option.label} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
}

export default Select;
