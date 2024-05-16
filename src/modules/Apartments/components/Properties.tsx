import {UserRole, useUser as useUserContext} from "../../../global/";
import UserProperties from "./UserProperties.tsx";
import AnonProperties from "./AnonProperties.tsx";

function Properties() {
    const { userRole } = useUserContext();

    return (
        <>
            {userRole === UserRole.USER ?
                (<>
                    <UserProperties />
                </>) :
                (<>
                    <AnonProperties />
                </>)
            }
        </>
    );
}

export default Properties;
