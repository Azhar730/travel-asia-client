import { useEffect, useState } from "react";
import AllSpotCard from "../components/AllSpotCard";
// setSpots(data.filter(item=>item.userEmail==email))

const AllTouristsSpot = () => {
    const [allTouristsSpot, setAllTouristsSpot] = useState([])
    const [displaySpot, setDisplaySpot] = useState([])

    const handleSpotsFilter = filter => {
        if (filter === 'all') {
            setDisplaySpot(allTouristsSpot)
        }
        else if (filter === 'bangladesh') {
            const bangladesh = allTouristsSpot.filter(spot => spot.countryName === "Bangladesh");
            setDisplaySpot(bangladesh)
        }
        else if (filter === 'thailand') {
            const thailand = allTouristsSpot.filter(spot => spot.countryName === "Thailand");
            setDisplaySpot(thailand)
        }
        else if (filter === 'indonesia') {
            const indonesia = allTouristsSpot.filter(spot => spot.countryName === "Indonesia");
            setDisplaySpot(indonesia)
        }
        else if (filter === 'malaysia') {
            const malaysia = allTouristsSpot.filter(spot => spot.countryName === "Malaysia");
            setDisplaySpot(malaysia)
        }
        else if (filter === 'vietnam') {
            const vietnam = allTouristsSpot.filter(spot => spot.countryName === "Vietnam");
            setDisplaySpot(vietnam)
        }
        else if (filter === 'cambodia') {
            const cambodia = allTouristsSpot.filter(spot => spot.countryName === "Cambodia");
            setDisplaySpot(cambodia)
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/touristsSpot')
            .then(res => res.json())
            .then(data => {
                setAllTouristsSpot(data)
                setDisplaySpot(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#D2B48C] text-lg font-bold">Sort by Country</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSpotsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleSpotsFilter('bangladesh')}><a>Bangladesh</a></li>
                        <li onClick={() => handleSpotsFilter('thailand')}><a>Thailand</a></li>
                        <li onClick={() => handleSpotsFilter('indonesia')}><a>Indonesia</a></li>
                        <li onClick={() => handleSpotsFilter('malaysia')}><a>Malaysia</a></li>
                        <li onClick={() => handleSpotsFilter('vietnam')}><a>Vietnam</a></li>
                        <li onClick={() => handleSpotsFilter('cambodia')}><a>Cambodia</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {
                    displaySpot.map((touristsSpot, idx) => <AllSpotCard key={idx} touristsSpot={touristsSpot}></AllSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;