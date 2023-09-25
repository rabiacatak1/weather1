import React, {useState} from "react";
import image from '../adsıztasarım.png';
import styles from './Weather.module.css';
import axios from "axios";


function Weather (){

    const [data,setData]=useState({});
    const [location,setLocation]=useState('');

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1ffc08aab9972771dc34ad2a729f751a`;

    const searchLocation =(event)=>{
        if(event.key==='Enter'){
            axios.get(url).then((response)=> {
                setData(response.data);
                console.log(response.data);
            })
                .catch((error)=>{
                    if(error.response.status=== 404) {
                        console.error('Geçersiz şehir adı')
                    } else{
                        console.error('Api hatası: ' ,error)
                    }
                })

            setLocation('');
        }

    }

    return(
        <div style={{
            backgroundImage:`url(${image})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'100vh',
            margin: '0',
            padding: '0',
        }}>
            {data &&
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.card}>
                                <div className={styles.header}>
                                    <input
                                        value={location}
                                        type="text"
                                        onChange={event => setLocation(event.target.value)}
                                        onKeyPress={searchLocation}
                                        placeholder="Enter a city"
                                        className={styles.inputEnterCity}
                                    >
                                    </input>
                                </div>

                                        <div className={styles.columnProp}>
                                                <h1>{data.name}</h1>
                                                {data.weather ?  <img alt="image" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} /> : null }
                                                {data.weather ?  <p>{data.weather[0].main}</p> : null }
                                                {data.main ? <h3> Sıcaklık: {data.main.temp.toFixed()} °C </h3> : null }
                                                {data.main ? <span>Hissedilen Sıcaklık: {data.main.feels_like.toFixed()} °C</span> : null }
                                                <br/>
                                                {data.main ? <span>Nem: %  {data.main.humidity} </span> : null}
                                                <br/>
                                                {data.wind ? <span>Rüzgar hızı: {data.wind.speed.toFixed()} MPS</span> : null}
                                        </div>




                    </div>


                </div>
            </div>
            }
        </div>
    )
}

export default Weather;