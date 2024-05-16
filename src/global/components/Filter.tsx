import { useSearchParams } from "react-router-dom";
import { FilterContainer } from "../style/FilterContainer.tsx";
import { FilterButton } from "../style/FilterButton.tsx";

interface Option {
    value: string;
    label: string;
}

interface FilterProps {
    filterField: string;
    options: Option[];
}

const Filter: React.FC<FilterProps> = ({ filterField, options }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options[0].value;

    function handleClick(value: string) {
        searchParams.set(filterField, value);
        if (searchParams.get("page"))
            searchParams.set("page", "1");
        setSearchParams(searchParams);
    }

    return (
        <FilterContainer>
            {options.map((option) =>
                <FilterButton key={option.value}
                              onClick={() => handleClick(option.value)}
                              active={option.value === currentFilter}
                              disabled={option.value === currentFilter}
                >
                    {option.label}
                </FilterButton>
            )}
        </FilterContainer>
    );
}

export default Filter;
