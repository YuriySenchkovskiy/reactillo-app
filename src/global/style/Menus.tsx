import { createContext, useContext, useState, ReactNode, FC, MouseEvent } from "react";
import styled from "styled-components";
import { HiEllipsisVertical } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  &:hover {
    background-color: var(--color-grey-100);
  }
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

interface StyledListProps {
    position: { x: number; y: number };
}

const StyledList = styled.ul<StyledListProps>`
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  &:hover {
    background-color: var(--color-grey-50);
  }
  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

interface MenusContextProps {
    openId: string;
    position: { x: number; y: number } | null;
    close: () => void;
    open: (id: string) => void;
    setPosition: (position: { x: number; y: number }) => void;
}

const MenusContext = createContext<MenusContextProps | undefined>(undefined);

interface MenusProps {
    children: ReactNode;
}

export const Menus: FC<MenusProps> & {
    Menu: typeof Menu;
    Toggle: typeof Toggle;
    List: typeof List;
    Button: typeof Button;
} = ({ children }) => {
    const [openId, setOpenId] = useState("");
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

    const close = () => setOpenId('');
    const open = (id: string) => setOpenId(id);

    return (
        <MenusContext.Provider value={{ openId, position, close, open, setPosition }}>
            {children}
        </MenusContext.Provider>
    );
};

interface ToggleProps {
    id: string;
}

const Toggle: FC<ToggleProps> = ({ id }) => {
    const context = useContext(MenusContext);
    if (!context) throw new Error("Toggle must be used within Menus");

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        context.setPosition({
            x: window.innerWidth - rect.left - rect.width,
            y: rect.top + rect.height + 8,
        });

        context.openId === "" || context.openId !== id ? context.open(id) : context.close();
    };

    return (
        <StyledToggle onClick={handleClick}>
            <HiEllipsisVertical />
        </StyledToggle>
    );
};

function List({ id, children }) {
    const context = useContext(MenusContext);
    const handleClose = context?.close || (() => {});
    const ref = useOutsideClick<HTMLUListElement>(handleClose, false);

    if (!context) return null;
    if (context.openId !== id) return null;

    return createPortal(
        <StyledList position={context.position!} ref={ref}>
            {children}
        </StyledList>,
        document.body
    );
}

interface ButtonProps {
    children: ReactNode;
    icon: JSX.Element;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, icon, onClick }) => {
    const context = useContext(MenusContext);
    if (!context) throw new Error("Button must be used within Menus");

    const handleClick = () => {
        onClick?.();
        context.close();
    };

    return (
        <li>
            <StyledButton onClick={handleClick}>
                {icon}<span>{children}</span>
            </StyledButton>
        </li>
    );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
