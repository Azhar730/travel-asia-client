import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../components/useAuth";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const {createUser,userProfile,update,setUpdate} = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const [passValidation, setPassValidation] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            setPassValidation('Password should be atleast 6 character or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPassValidation('Your Password Should have Atleast one UPPERCASE')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setPassValidation('Your Password Should have Atleast one lowercase')
            return;
        }
        
        createUser(email,password)
        .then((result) => {
            if(result.user){
                toast.success('User Created Successfully')
                userProfile(fullName,photo)
                .then(()=>{
                    setUpdate(!update)
                    navigate(from)
                })
            }
        })
        .catch(error=>{
            if(error){
                toast.error('Email Already Registered')
            }
        })
        setPassValidation('')
        form.reset()
    }
    return (
        <div className="bg-[#ebe0d2] p-8 rounded-xl w-2/4 mx-auto">
            <h1 className="text-3xl font-bold text-center">Register Now</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Name</span>
                    </label>
                    <input name="fullName" type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Photo URL</span>
                    </label>
                    <input name="photo" type="text" placeholder="Enter Your Photo URL" className="input input-bordered" required />
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
                    <div className="text-[#f21b17] text-center font-semibold">
                        {
                            passValidation && <p>{passValidation}</p>
                        }
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#EA4744] hover:bg-[#ec0a06] text-white text-lg font-semibold">Register Now</button>
                </div>
            </form>
            <div>
                <div className="flex justify-between mx-8 mb-6">
                    <p>Already Account?</p>
                    <p>Please <Link className="text-blue-500 font-semibold" to={'/login'}>Login</Link></p>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;
