import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllSpotCard = ({ touristsSpot }) => {
    const { _id,spotName, countryName, averageCost, seasonality, travelTime, totalVisitors, photo,userEmail } = touristsSpot
    console.log(userEmail);
    return (
        <div className='w-96 px-8 py-6 rounded-xl shadow-lg bg-[#FFF] border border-gray-300'>
            <img className='h-[170px] w-[350px] rounded-lg' src={photo} alt="" />
            <div className="mb-3">
                <h2 className="text-[#01B9B7] flex items-center mt-4 text-xl font-semibold"><FaLocationDot></FaLocationDot> {countryName}</h2>
                <h1 className="text-2xl font-bold text-[#071C55] mt-2">{spotName}</h1>
                <div className="flex items-center justify-between">
                    <p className="text-xl">{travelTime}/<span className="text-[#f39017] text-2xl font-bold">{averageCost}</span></p>
                    <div>
                        <p className="text-lg">Total Visitor Per Year:</p>
                        <p className="text-lg font-semibold text-[#e80808] ml-24">{totalVisitors}</p>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-400 mb-3 border-dashed"></div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <p className="text-lg font-medium">Season: {seasonality}</p>

                </div>
                <Link to={`/touristsSpot/${_id}`} className="btn btn-outline btn-accent btn-sm">View Details</Link>
            </div>
        </div>
    );
};

export default AllSpotCard;