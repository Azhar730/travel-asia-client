import Swal from "sweetalert2";
import useAuth from "../components/useAuth";

const AddTouristsSpot = () => {
    const {user} = useAuth()
    const handleAddTouristsSpot = e => {
        e.preventDefault()
        const form = e.target;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const photo = form.photo.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const description = form.description.value
        const spotInfo = {spotName,countryName,location,averageCost,seasonality,travelTime,totalVisitors,photo,userName,userEmail,description}
        form.reset()
        fetch('https://travel-asia-server-eight.vercel.app/touristsSpot',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(spotInfo)
        })
        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourists Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] rounded-xl'>
            <form onSubmit={handleAddTouristsSpot} className="card-body px-4 md:px-24">
                <h1 className="text-3xl font-bold text-center mb-10">Add Tourists Spot</h1>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Spot Name</span>
                        </label>
                        <input name='spotName' type="text" placeholder="Enter Tourists Spot Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text  text-lg font-bold">Country Name</span>
                        </label>
                        <input name='countryName' type="text" placeholder="Enter Country Name" className="input input-bordered" required/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Location</span>
                        </label>
                        <input name='location' type="text" placeholder="Enter Spot Location" className="input input-bordered" required/>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text  text-lg font-bold">Average Cost</span>
                        </label>
                        <input name='averageCost' type="text" placeholder="Average Cost" className="input input-bordered" required/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Seasonality</span>
                        </label>
                        <input name='seasonality' type="text" placeholder="Enter Seasonality" className="input input-bordered" required/>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text  text-lg font-bold">Travel Time</span>
                        </label>
                        <input name='travelTime' type="text" placeholder="Enter Travel Time" className="input input-bordered" required/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Total Visitors Per Year</span>
                        </label>
                        <input name='totalVisitors' type="text" placeholder="Total Visitors Per Year" className="input input-bordered" required/>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text  text-lg font-bold">Photo</span>
                        </label>
                        <input name='photo' type="text" placeholder="Enter Spot Photo URL" className="input input-bordered" required/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-lg font-bold">User Name</span>
                        </label>
                        <input name='userName' type="text" defaultValue={user?.displayName || 'User'} readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text  text-lg font-bold">User Email</span>
                        </label>
                        <input name='userEmail' type="email" defaultValue={user?.email || 'user@gmail.com'} readOnly className="input input-bordered" />
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text  text-lg font-bold">Short Description</span>
                    </label>
                    <textarea name="description" placeholder="Enter Short Description" className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D2B48C] hover:bg-[#f2b463] text-xl font-bold">Add Spot</button>
                </div>
            </form>
        </div>
    );
};

export default AddTouristsSpot;