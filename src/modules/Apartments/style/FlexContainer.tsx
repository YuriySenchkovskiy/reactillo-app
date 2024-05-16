import styled from "styled-components";

export const FlexContainer = styled.div<{ hasTwoButtons: boolean }>`
    display: flex;
    justify-content: ${props => props.hasTwoButtons ? 'space-between' : 'center'};
    align-items: center;
    margin-top: 20px;
`;

export const FlexContainerAround = styled.div`
    display: flex;
    justify-content: space-around;
`;