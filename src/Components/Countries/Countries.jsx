import { useEffect, useState } from "react";
import Country from '../Country/Country'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/independent?status=true")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);

    return (
        <div className="countries">
            <h3>Countries: {countries.length}</h3>
            <div className="mainBox">
                {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;