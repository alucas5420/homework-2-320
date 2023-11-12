import React from "react";
import styles from "@/styles/Hero.module.css";

export default function Hero(props) {
    // console.log(props);
    return (
        <>
        <div className={styles.hero} style={{backgroundImage: 
        `url(${props.heroImage})`, height: props.height}}>
            {props.header}
        </div>
        </>
    )
}