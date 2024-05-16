import React from 'react';
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

interface Option {
    value: string;
    label: string;
}

interface SortByProps {
    options: Option[];
}

const SortBy: React.FC<SortByProps> = ({ options }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select
            options={options}
            type='white'
            onChange={handleChange}
            value={sortBy}
        />
    );
}

export default SortBy;
