import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TouristsSpotCard = ({ touristsSpot }) => {
    const { _id,spotName, countryName,averageCost, travelTime, photo } = touristsSpot
    return (
        <div className='w-96 h-[400px] px-8 py-6 rounded-xl shadow-lg bg-[#f9f7f1] border border-gray-300'>
            <img className='h-[170px] w-[350px] rounded-lg' src={photo} alt="" />
            <div>
                <h2 className="text-[#01B9B7] flex items-center mt-4 text-xl font-semibold"><FaLocationDot></FaLocationDot> {countryName}</h2>
                <h1 className="text-2xl font-bold text-[#071C55] mt-2">{spotName}</h1>
                <p className="text-xl">{travelTime}/<span className="text-[#f39017] text-2xl font-bold">{averageCost}</span></p>
                <Link to={`/touristsSpot/${_id}`} className="btn btn-outline btn-accent ml-48 mt-4">View Details</Link>
            </div>
        </div>
    );
};

export default TouristsSpotCard;