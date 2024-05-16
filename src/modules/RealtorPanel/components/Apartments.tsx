import {Row} from "../../../global/";
import {Heading} from "../../../global";
import {Container} from "../style/ContainerHeight.tsx";
import ApartmentTableOperations from "./ApartmentTableOperations.tsx";
import ApartmentTable from "./ApartmentTable.tsx";
import CreateApartmentButton from "./CreateApartmentButton.tsx";

function Apartments() {
    return (
        <Container>
            <Row type="horizontal">
                <Heading as="h1">Your apartments</Heading>
                <ApartmentTableOperations />
            </Row>

            <ApartmentTable />
            <Row>
                <CreateApartmentButton />
            </Row>
        </Container>
    );
}

export default Apartments;
