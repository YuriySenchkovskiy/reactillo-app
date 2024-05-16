import {Link} from "react-router-dom";
import { useRoutesNames } from "../../../global";
import {StyledFooter} from "../style/Footer.tsx";

function Footer() {
    const { routes } = useRoutesNames();
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <div>
                <Link to={routes.policies}>Privacy policy</Link>
                <p>© {currentYear} Reactillo. All rights reserved.</p>
            </div>
        </StyledFooter>
    )
 }

 export default Footer