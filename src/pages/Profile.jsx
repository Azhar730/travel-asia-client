import { useNavigate } from "react-router-dom";
import useAuth from "../components/useAuth";

const Profile = () => {
    const {user,userProfile,update,setUpdate} = useAuth()
    const navigate = useNavigate()
    const from = '/profile'
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const photo = form.photo.value
        userProfile(fullName,photo)
        .then(()=>{
            setUpdate(!update)
            navigate(from)
        })
        form.reset()
    }
    return (
        <div className="flex flex-col lg:flex-row mt-10">
            <div className="flex flex-1 flex-col items-center justify-center">                                                      
                <img className="w-72 rounded-full" src={user.photoURL} alt="" />
                <p className="text-2xl font-bold">{user.displayName}</p>
            </div>
            <form onSubmit={handleUpdate} className="flex-1 card-body">
            <h2 className="text-xl font-bold text-green-500">Want to Update Your Profile</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="fullName" type="text" placeholder="Enter Your Update Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Profile;