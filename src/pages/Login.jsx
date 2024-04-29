import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../components/useAuth";
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from "../components/SocialLogin";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signInUser } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from)
                    toast.success('User Logged In Successful')
                }
            })
            .catch(error => {
                if (error) {
                    toast.error('Wrong Email or Password')
                }
            })
        form.reset()
    }
    return (
        <div>
            <div className="bg-[#ebe0d2] p-8 rounded-xl w-2/4 mx-auto">
                <h1 className="text-3xl font-bold text-center">Login Now</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter New Password" className="input input-bordered" required />
                        <span className="absolute ml-[415px] mt-[58px] text-xl" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#EA4744] hover:bg-[#ec0a06] text-white text-lg font-semibold">Register Now</button>
                    </div>
                </form>
                <div>
                    <div className="flex justify-between mx-8 mb-6">
                        <p>New Here?</p>
                        <p>Please <Link className="text-blue-500 font-semibold" to={'/register'}>Register</Link></p>
                    </div>
                    <div className="px-8 py-4">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;