import React from "react";
import styles from "@/styles/Contact.module.css"
import { useRouter } from "next/router";

export default function Contact() {

    const [fullName, setFullName] = React.useState("");
    const [fullName2, setFullName2] = React.useState("");
    const [fullName3, setFullName3] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [email2, setEmail2] = React.useState("");
    const [email3, setEmail3] = React.useState("");

    // let fullName = "Adam Lucas";
    // let email = "adalucas@iu.edu";

    const Router = useRouter();

    function contactFormSubmit(e) {
        e.preventDefault();
        if(fullName !== "" && email !== "") {
            Router.push("/contact/success");

        }
    }

    function contactFormSubmit2(e) {
        e.preventDefault();
        if(fullName2 !== "" && email2 !== "") {
            Router.push("/contact/success2");
        }
    }

    function contactFormSubmit3(e) {
        e.preventDefault();
        if(fullName3 !== "" && email3 !== "") {
            Router.push("/contact/success3");

        }
    }

    function updateContactInfo(e) {
        if (e.currentTarget.name === "fullName") {
            // fullName = e.currentTarget.value;
            setFullName(e.currentTarget.value);
        }
        if (e.currentTarget.name === "email") {
            // email = e.currentTarget.value;
            setEmail(e.currentTarget.value);
        }
    }

    function updateContactInfo2(e) {
        if (e.currentTarget.name === "fullName2") {
            // fullName = e.currentTarget.value;
            setFullName2(e.currentTarget.value);
        }
        if (e.currentTarget.name === "email2") {
            // email = e.currentTarget.value;
            setEmail2(e.currentTarget.value);
        }
    }
    
    function updateContactInfo3(e) {
        if (e.currentTarget.name === "fullName3") {
            // fullName = e.currentTarget.value;
            setFullName3(e.currentTarget.value);
        }
        if (e.currentTarget.name === "email3") {
            // email = e.currentTarget.value;
            setEmail3(e.currentTarget.value);
        }
    }

    return (
        <>
        <form className={styles.form} onSubmit={contactFormSubmit}>
        <h1>Contact IUPUI:</h1>

        <div className={styles.formField}>
            <label>Name:</label>
            <input name="fullName" type="text" placeholder="" onChange={updateContactInfo} value={fullName}/>
        </div>

        <div className={styles.formField}>
            <label>Email:</label>
            <input name="email" type="email" placeholder="" onChange={updateContactInfo} value={email}/>
        </div>

        <div className={styles.formField}>
            <input type="submit" value="Send"/>
        </div>

        </form>

        <form className={styles.form} onSubmit={contactFormSubmit2}>
        <h1>Contact an Advisor:</h1>

        <div className={styles.formField}>
            <label>Name:</label>
            <input name="fullName2" type="text" placeholder="" onChange={updateContactInfo2} value={fullName2}/>
        </div>

        <div className={styles.formField}>
            <label>Email:</label>
            <input name="email2" type="email2" placeholder="" onChange={updateContactInfo2} value={email2}/>
        </div>

        <div className={styles.formField}>
            <input type="submit" value="Send"/>
        </div>

        </form>
        <form className={styles.form} onSubmit={contactFormSubmit3}>
        <h1>Apply to IUPUI:</h1>

        <div className={styles.formField}>
            <label>Name:</label>
            <input name="fullName3" type="text" placeholder="" onChange={updateContactInfo3} value={fullName3}/>
        </div>

        <div className={styles.formField}>
            <label>Email:</label>
            <input name="email3" type="email3" placeholder="" onChange={updateContactInfo3} value={email3}/>
        </div>

        <div className={styles.formField}>
            <input type="submit" value="Send"/>
        </div>

        </form>
        </>
    )
}