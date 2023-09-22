import React, { useEffect,useState} from 'react';

export default function FetchExample() {

    const [countries,setCountries]=useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response=>response.json)
            .then(response=>setCountries(response));
    }, []);

    console.log(countries);
    return(
        <div>
            <h1>
                ReactJs fetch() api axios kullanarak veri alma
            </h1>
            {
                countries.map(country=>{
                    return(
                        <div>
                            <h2>{country.name}</h2>
                        </div>
                    )
                })
            };
        </div>
    )

}
