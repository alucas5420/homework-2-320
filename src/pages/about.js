import React from "react";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Line from "@/components/Line";

export default function About() {
    return (
        <>
    <Hero heroImage="/Admin.jpg" height="400px" header="ABOUT" />
    <Line/>
    <br></br> 
    <h1 className={styles.iupuiFont}>Welcome to the IUPUI about page!</h1>
    <p className={styles.otherFont}>On this page, you can learn more about IUPUI!</p>
    <Line/>
    <br></br>
    <p className={styles.otherFont}>IUPUI is driven by multiple different values, such as:</p>
    <p className={styles.otherFont}>Diversity, Equity & Inclusion</p>
    <p className={styles.otherFont}>Student Success</p>
    <p className={styles.otherFont}>Educational Excellence</p>
    <p className={styles.otherFont}>Community Engagement</p>
    <p className={styles.otherFont}>Safety</p>
    <Line/>
    
    </>
    )
}