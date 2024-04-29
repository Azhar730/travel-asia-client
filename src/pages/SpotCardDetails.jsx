import { Link, useLoaderData } from "react-router-dom";

const SpotCardDetails = () => {
    const spots = useLoaderData()
    const { spotName, countryName, location, averageCost, seasonality, travelTime, totalVisitors, photo, userName, userEmail, description } = spots
    console.log(spotName);
    return (
        <div className="max-w-5xl mx-auto">
            <img className="rounded-lg h-[450px] mx-auto w-[800px]" src={photo} alt="" />
            <div className="px-4 md:px-28 py-6">
                <h1 className="text-4xl font-bold text-green-900">{spotName}</h1>
                <h2 className="text-2xl mt-2 font-semibold text-[#EF4C53]">{countryName}</h2>
                <p className="text-lg font-semibold mt-4">{description}</p>
                <div className="flex justify-between mt-6">
                    <p className="text-xl font-bold text-green-800">Cost:{averageCost} </p>
                    <p className="text-xl font-bold text-[#ba131b]">Travel Time:{travelTime} </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between border-t border-gray-500 mt-6">
                    <div>
                        <p className="text-2xl font-bold">Seasonality: {seasonality}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">Total Visitors: {totalVisitors} </p>
                        <p className="text-xl font-semibold">Location: {location}</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl font-semibold">{userName} </p>
                    <p className="text-xl font-semibold">{userEmail}</p>
                </div>
                <Link to={'/'} className="btn">Go Home</Link>
            </div>
        </div>
    );
};

export default SpotCardDetails;