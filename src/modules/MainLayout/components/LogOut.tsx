import {SpinnerMini} from "../../../global/";
import {useDarkMode} from "../../../global";
import {useLogout} from "../../Auth/";
import {MenuButton} from "../style/MenuButton.tsx";

function Logout () {
    const {logout, isLoading} = useLogout();
    const { isDarkMode } = useDarkMode();

    return (
        <MenuButton dark={isDarkMode} disabled={isLoading} onClick={() => logout()}>
            {!isLoading ? <span>Log out</span> : <SpinnerMini/>}
        </MenuButton>
    )
}

export default Logout;