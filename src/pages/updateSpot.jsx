import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const updateSpot = () => {
    const spots = useLoaderData()
    const { _id, spotName, countryName, location, averageCost, seasonality, travelTime, totalVisitors, photo, description } = spots
    const handleUpdateSpot = e => {
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
        const description = form.description.value
        const updateSpot = { spotName, countryName, location, averageCost, seasonality, travelTime, totalVisitors, photo, description }
        console.log(updateSpot);
        form.reset()
        fetch(`http://localhost:5000/touristsSpot/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }
    return (
        <div className='bg-[#F4F3F0] rounded-xl'>
            <div className='bg-[#F4F3F0] rounded-xl'>
                <form onSubmit={handleUpdateSpot} className="card-body px-4 md:px-24">
                    <h1 className="text-3xl font-bold text-center mb-10">Update Tourists Spot</h1>
                    <h1 className="text-3xl text-[#f2b463] font-bold text-center">{spotName}</h1>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Spot Name</span>
                            </label>
                            <input defaultValue={spotName} name='spotName' type="text" placeholder="Enter Tourists Spot Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text  text-lg font-bold">Country Name</span>
                            </label>
                            <input defaultValue={countryName} name='countryName' type="text" placeholder="Enter Country Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Location</span>
                            </label>
                            <input defaultValue={location} name='location' type="text" placeholder="Enter Spot Location" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text  text-lg font-bold">Average Cost</span>
                            </label>
                            <input defaultValue={averageCost} name='averageCost' type="text" placeholder="Average Cost" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Seasonality</span>
                            </label>
                            <input defaultValue={seasonality} name='seasonality' type="text" placeholder="Enter Seasonality" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text  text-lg font-bold">Travel Time</span>
                            </label>
                            <input defaultValue={travelTime} name='travelTime' type="text" placeholder="Enter Travel Time" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Total Visitors Per Year</span>
                            </label>
                            <input defaultValue={totalVisitors} name='totalVisitors' type="text" placeholder="Total Visitors Per Year" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text  text-lg font-bold">Photo</span>
                            </label>
                            <input defaultValue={photo} name='photo' type="text" placeholder="Enter Spot Photo URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text  text-lg font-bold">Short Description</span>
                        </label>
                        <textarea defaultValue={description} name="description" placeholder="Enter Short Description" className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] hover:bg-[#f2b463] text-xl font-bold">Update Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default updateSpot;