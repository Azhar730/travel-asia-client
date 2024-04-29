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
            <h1>Country {countries.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    countries.map((country, idx) => <CountryCard key={idx} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Country;