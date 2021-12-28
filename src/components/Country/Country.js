import React from 'react';
import './country.css';
const Country = ({stats}) => {
    return(
        <div className='country'>
            <img src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`} alt={stats.Country}></img>
            <h2>{stats.Country}</h2>
            <div className='describe'>
                <p>{`Active cases : ${stats.Active}`}</p> 
                <p>{`Confirmed cases: ${stats.Confirmed}`}</p> 
                <p>{`Deaths cases : ${stats.Deaths}`}</p> 
                <p>{`Recovered cases: ${stats.Recovered}`}</p> 
            </div>
        </div>
    )
}

export default Country;