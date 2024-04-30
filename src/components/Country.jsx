import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center px-20">
                <h1 className="text-5xl font-bold">Explore Country for Your next Destination</h1>
                <p className="mt-4 text-lg font-semibold text-gray-500">Embark on a journey of discovery as you explore countries for your next destination. From vibrant cultures to stunning landscapes, immerse yourself in the beauty and diversity of each destination. Let us inspire your wanderlust and guide you towards your next unforgettable adventure.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                {
                    countries.map((country, idx) => <CountryCard key={idx} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Country;