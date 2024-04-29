import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const SocialLogin = () => {
    const {googleLogin,githubLogin}=useAuth()
    const navigate = useNavigate();
    const location = useLocation();

  const from = location?.state || "/";
  const handleSocialLogin=socialProvider=>{
    socialProvider()
    .then(result=>{
        if(result.user){
            navigate(from)
        }
    })
  }
    return (
        <div className="flex items-center justify-around">
            <FcGoogle onClick={() => handleSocialLogin(googleLogin)} className="text-3xl cursor-pointer"></FcGoogle>
            <FaGithub onClick={() => handleSocialLogin(githubLogin)} className="text-3xl cursor-pointer"></FaGithub>
        </div>
    );
};

export default SocialLogin;