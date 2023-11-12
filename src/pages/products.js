import React from "react";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Line from "@/components/Line";

export default function Products() {
    return (
        <>
        <Hero heroImage="/gateway.jpg" height="400px" header="PRODUCTS" />
        <Line/>
        <br></br> 
        <h1 className={styles.iupuiFont}>Welcome to the IUPUI products page!</h1>
        <p className={styles.otherFont}>On this page, you can learn more about products sold at IUPUI!</p>
        <Line/>
        <br></br>
        <p className={styles.otherFont}>IUPUI has many different products to choose from, such as:</p>
        <p className={styles.otherFont}>Shirts</p>
        <p className={styles.otherFont}>Sweatshirts</p>
        <p className={styles.otherFont}>Backpacks</p>
        <p className={styles.otherFont}>Hats</p>
        <p className={styles.otherFont}>Stickers</p>
        <Line/>
        
        </>
    )
}