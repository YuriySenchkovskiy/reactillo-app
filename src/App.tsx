// import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {useRoutesNames} from "./global/";
import {GlobalStyles, SpinnerFullPage, ToasterSettings} from "./global";
import {ProtectedRoute} from "./modules/Auth";

const AppLayout = lazy(() => import("./pages/AppLayout.tsx"));
const Homepage = lazy(() => import("./pages/Homepage.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const DetailPage = lazy(() => import("./pages/DetailPage.tsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Register = lazy(() => import("./pages/Register.tsx"));
const RealtorPanel = lazy(() => import("./pages/RealtorPanel.tsx"));
const EditPage = lazy(() => import("./pages/EditPage.tsx"));
const CreatePage = lazy(() => import("./pages/CreatePage.tsx"));

function App () {
    const { routes } = useRoutesNames();

    return (
        <>
            {/*<ReactQueryDevtools initialIsOpen={false}/>*/}
            <GlobalStyles/>
            <BrowserRouter>
                <Suspense fallback={<SpinnerFullPage/>}>
                    <Routes>
                        <Route element={<AppLayout />}>
                            <Route index element={<Homepage />} />
                            <Route path={routes.login} element={<Login />} />
                            <Route path={routes.register} element={<Register />} />

                            <Route path={routes.details} element={<DetailPage />} />
                            <Route path={routes.notExist} element={<PageNotFound />}/>
                            <Route path={routes.policies} element={<PrivacyPolicy />}/>

                            <Route element={
                                <ProtectedRoute />
                            }>
                                <Route path={routes.realtor} element={<RealtorPanel />} />
                                <Route path={routes.editId} element={<EditPage />} />
                                <Route path={routes.create} element={<CreatePage />} />
                            </Route>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <ToasterSettings />
        </>
    )
}

export default App
