import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import TouristsSpotCard from "./components/TouristsSpotCard";
import Country from "./components/Country";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import WhyChoose from "./components/WhyChoose";

const Home = () => {
    const loadedTouristsSpots = useLoaderData()
    const [touristsSpots, setTouristsSpots] = useState(loadedTouristsSpots)
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-5xl text-center font-bold text-[#f39a25] my-16">Explore the World Wonders: AdventureAxis Travel Experiences Await You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    touristsSpots.slice(0,6).map((touristsSpot, idx) => <TouristsSpotCard key={idx} touristsSpot={touristsSpot} touristsSpots={touristsSpots} setTouristsSpots={setTouristsSpots}></TouristsSpotCard>)
                }
            </div>
            <Services></Services>
            <Country></Country>
            <WhyChoose></WhyChoose>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;