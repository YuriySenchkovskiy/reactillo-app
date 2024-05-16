import {Outlet} from "react-router-dom";
import {Container} from "../global/";
import {Background} from "../global/";
import {InnerContainer} from "../global/";
import {Header} from '../modules/MainLayout/index.ts';
import {Footer} from '../modules/MainLayout/index.ts';

function AppLayout() {
    return (
        <Background>
            <Container>
                <Header />
                <InnerContainer>
                    <Outlet />
                </InnerContainer>
                <Footer />
            </Container >
        </Background>
    )
 }

 export default AppLayout;