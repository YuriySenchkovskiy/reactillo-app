import {useNavigate} from "react-router-dom";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";
import {UserRole} from "../../../global";
import { useUser as useUserContext } from "../../../global/";
import { useRoutesNames } from "../../../global";
import {useDarkMode} from "../../../global/";
import {useUser} from "../../Auth/";
import {MenuButton} from "../style/MenuButton.tsx";
import {ButtonIcon} from "../style/ButtonIcon.tsx";
import LogOut from "./LogOut.tsx";

interface MenuProps {
    onHandle: () => void;
}

const Menu: React.FC<MenuProps> = ({ onHandle }) => {
    const navigate = useNavigate();
    const { routes } = useRoutesNames();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { isAuthenticated } = useUser();
    const { userRole } = useUserContext();

    return (
        <>
            {!isAuthenticated ? (
                <>
                    <MenuButton dark={isDarkMode} onClick={() => {onHandle(); navigate(routes.login)}}>Log in</MenuButton>
                    <MenuButton dark={isDarkMode} onClick={() => {onHandle(); navigate(routes.register)}}>Sign up</MenuButton>
                </>
                ) : (
                <>
                    {userRole === UserRole.REALTOR && (
                        <MenuButton dark={isDarkMode} onClick={() => {onHandle(); navigate(routes.realtor)}}>Admin Panel</MenuButton>
                    )}
                    <LogOut/>
                </>
                )
            }

            <ButtonIcon onClick={toggleDarkMode}>
                {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </ButtonIcon>
        </>
    )
 }

 export default Menu;