import {Link} from "react-router-dom";
import { useRoutesNames } from "../../../global";
import { useDarkMode } from '../../../global/';
import {StyledLogo} from "../style/StyledLogo.tsx";
import {Img} from "../style/StyledLogo.tsx";

function Logo() {
    const { isDarkMode } = useDarkMode();
    const src = isDarkMode ? "/Reactillo_dark.png" : "/Reactillo.png";
    const { routes } = useRoutesNames();

    return (
        <StyledLogo>
            <Link to={routes.homepage}>
                <Img src={src} alt="Reactillo Logo" />
            </Link>
        </StyledLogo>
    );
}

export default Logo;
