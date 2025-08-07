import './Country.css'
const Country = ({country}) => {
    console.log(country);

    console.log(country.name.common);
    if (country.name.common ===  "Israel") return null;
    
    return (
        <div className='country'>
            <h3>{country.name.common}</h3>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    );
};

export default Country;