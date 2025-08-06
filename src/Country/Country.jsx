import './Country.css'

const Country = ({country}) => {
    console.log(country);

    if(country.name.common === "Israel") return null;
    
    return (
        <div className="Country">
            <img src={country.flags.png} alt="country flag"  height={10}/>
            <h4>Name: <span>{country.name.common}</span></h4>
        </div>
    );
};

export default Country;