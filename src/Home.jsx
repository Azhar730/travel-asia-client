import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import TouristsSpotCard from "./components/TouristsSpotCard";
import Country from "./components/Country";

const Home = () => {
    const loadedTouristsSpots = useLoaderData()
    const [touristsSpots, setTouristsSpots] = useState(loadedTouristsSpots)
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl font-bold">HomePage{touristsSpots.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    touristsSpots.slice(0,6).map((touristsSpot, idx) => <TouristsSpotCard key={idx} touristsSpot={touristsSpot} touristsSpots={touristsSpots} setTouristsSpots={setTouristsSpots}></TouristsSpotCard>)
                }
            </div>
            <Country></Country>
        </div>
    );
};

export default Home;