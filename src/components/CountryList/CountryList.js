import React from 'react';
import Country from '../Country/Country';
import './countrylist.css'; // importing countrylist.css file
const CountryList = ({stats}) =>{
    return(
        <div className='countrylist'>
            {
             stats.map(country =><Country key={country.CountryCode} stats={country}/>)
            }
        </div>
    )
}
export default CountryList; // exporting countrylist