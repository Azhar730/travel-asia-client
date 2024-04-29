import { useEffect, useState } from "react";
import AllSpotCard from "../components/AllSpotCard";
//setSpots(data.filter(item=>item.userEmail==email))

const AllTouristsSpot = () => {
    const [allTouristsSpot, setAllTouristsSpot] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/touristsSpot')
            .then(res => res.json())
            .then(data => {
                const sortedItems = [...data].sort((a,b)=>b.averageCost - a.averageCost)
                setAllTouristsSpot(sortedItems)
            })
    }, [allTouristsSpot])
    return (
        <div>
            <h1 className="text-4xl font-bold">All Tourists Spot : {allTouristsSpot.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    allTouristsSpot.map((touristsSpot, idx) => <AllSpotCard key={idx} touristsSpot={touristsSpot}></AllSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;