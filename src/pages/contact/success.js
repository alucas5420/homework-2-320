import React from "react";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Line from "@/components/Line";

export default function ContactSuccess() {
    return (
        <>
    <br></br> 
    <h1 className={styles.iupuiFont}>Message Successfully Sent!</h1>
    <p className={styles.otherFont}>Please wait for a response from IUPUI.</p>
    <Line/>
    <Hero heroImage="/City.jpg" backgroundRepeat="no-repeat" height="500px" />
    <Line/>
    
    </>
    )

}