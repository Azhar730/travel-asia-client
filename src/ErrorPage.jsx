import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-[500px] font-extrabold text-center">404</h1>
            <div className="text-center">
                <Link to={'/'} className="btn bg-[#D2B48C] text-center mt-10">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;