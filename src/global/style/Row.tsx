import styled, {css} from "styled-components";

interface RowProps {
    type?: 'horizontal' | 'vertical';
}

const Row = styled.div<RowProps>`
    display: flex;
    
    ${props => props.type === 'horizontal' && css `
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;

        @media (max-width: 720px) {
            flex-wrap: wrap;
        }
    `}
    
    ${props => props.type === 'vertical' && css `
        flex-direction: column;
        gap: 1.6rem;
    `}
`

export default Row;