import React from "react";

let today = new Date();
let currentYear = today.getFullYear();

function Footer(){
    return (
        <p>Made with by Leksyking {currentYear}</p>
    )
}

export default Footer;