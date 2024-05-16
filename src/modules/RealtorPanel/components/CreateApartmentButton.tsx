import {useNavigate} from "react-router-dom";
import { useRoutesNames } from "../../../global";
import {Button} from "../../../global";
import {CreateApartmentContainerStyle} from "../style/CreateApartmentContainerStyle.tsx";

function CreateApartmentButton() {
    const navigate = useNavigate();
    const { routes } = useRoutesNames();

    const handleCreate = () => {
        navigate(routes.create);
    };

    return (
        <CreateApartmentContainerStyle>
            <Button onClick={handleCreate}>Add new apartment</Button>
        </CreateApartmentContainerStyle>
    );
}

export default CreateApartmentButton;
