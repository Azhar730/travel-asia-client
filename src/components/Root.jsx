import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Nav></Nav>
            <div className="min-h-[calc(100vh-401px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Root;