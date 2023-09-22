import React from "react";
import image from '../adsıztasarım.png';
import styles from './Weather.module.css';


function Weather (){
    return(
        <div style={{
            backgroundImage:`url(${image})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'100vh',
            margin: '0',
            padding: '0',
        }}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.card}>
                                <div className={styles.header}>
                                    <input
                                        type="text"
                                        id="city"
                                        placeholder="Enter a city"
                                        className={styles.inputEnterCity}
                                    >

                                    </input>
                                </div>

                                <div className={styles.rowNameCity}>
                                    <h1>Şehir Adı</h1>
                                </div>
                                <div className={styles.rowCard}>
                                    <div className={styles.cardinCol1}>
                                        <span>hava durumu resmi</span>
                                    </div>
                                    <div className={styles.cardinCol2}>
                                        <span>hava durumu bilgikeri</span>
                                    </div>
                                    <div className={styles.cardinCol3}>
                                        <span>şehir bilgileri bilgikeri</span>
                                    </div>
                                </div>




                    </div>


                </div>
            </div>
        </div>
    )
}

export default Weather;