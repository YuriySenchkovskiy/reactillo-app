import { createContext, useContext, ReactNode, FC } from "react";
import styled from "styled-components";
import {ApartmentProps} from "../../modules/Apartments/constants/AppartmentProps.tsx";
import React from "react";

interface TableContextProps {
    columns: string;
}

interface TableProps {
    columns: string;
    children: ReactNode;
}

interface HeaderProps {
    children: ReactNode;
}

interface RowProps {
    children: ReactNode;
}

interface BodyProps {
    data: ApartmentProps[];
    render: (item: ApartmentProps) => React.ReactNode;
}

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext<TableContextProps | undefined>(undefined);

export const Table: FC<TableProps> & {
    Header: FC<HeaderProps>;
    Body: FC<BodyProps>;
    Row: FC<RowProps>;
    Footer: typeof Footer;
} = ({ columns, children }) => {
    return (
        <TableContext.Provider value={{ columns }}>
            <StyledTable role="table">{children}</StyledTable>
        </TableContext.Provider>
    );
};

const Header: FC<HeaderProps> = ({ children }) => {
    const context = useContext(TableContext);
    if (!context) throw new Error("Header must be used within a Table");
    return (
        <StyledHeader role="row" columns={context.columns} as="header">
            {children}
        </StyledHeader>
    );
};

const Row: FC<RowProps> = ({ children }) => {
    const context = useContext(TableContext);
    if (!context) throw new Error("Row must be used within a Table");
    return (
        <StyledRow role="row" columns={context.columns}>
            {children}
        </StyledRow>
    );
};

const Body: FC<BodyProps> = ({ data, render }) => {
    if (data.length === 0) return <Empty>No data to show at the moment</Empty>;
    return (
        <StyledBody>
            {data.map(item => (
                <React.Fragment key={item.apartments_id}>{render(item)}</React.Fragment>
            ))}
        </StyledBody>
    );
};


Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
