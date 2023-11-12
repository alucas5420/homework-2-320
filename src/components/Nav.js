import React from "react";
import styles from "@/styles/Nav.module.css";

export default function Nav(props) {
    // console.log(props);
    return (
        <>
        <div className={styles.nav}>
            {props.header}
            <letterspacing></letterspacing>
            {props.header2}
            <letterspacing></letterspacing>
            {props.header3}
            <letterspacing></letterspacing>
            {props.header4}
        </div>
        </>
    )
}