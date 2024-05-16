import { useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

import {FixedMenuContainer} from "../style/FixedMenuContainer.tsx";
import {InnerContainer} from "../style/InnerContainer.tsx";
import {StyledMenu} from "../style/StyledMenu.tsx";
import {MobileIcon, MobileMenu} from "../style/ModileMenu.tsx";
import {Overlay} from "../style/Overlay.tsx";
import Logo from './Logo';
import Menu from "./Menu.tsx";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <FixedMenuContainer>
                <InnerContainer>
                    <Logo />
                    <StyledMenu>
                        <Menu onHandle={() => {}}/>
                    </StyledMenu>
                    <MobileIcon onClick={handleToggleMenu}>
                        {<HiBars3 />}
                    </MobileIcon>
                </InnerContainer>
            </FixedMenuContainer>
            <MobileMenu isOpen={isMenuOpen}>
                <MobileIcon onClick={handleToggleMenu}>
                    {<HiMiniXMark />}
                </MobileIcon>
                <Menu onHandle={handleToggleMenu}/>
            </MobileMenu>
            <Overlay isOpen={isMenuOpen} onClick={handleToggleMenu} />
        </>
    );
}

export default Header;
