import React from "react";

let today = new Date();
let currentYear = today.getFullYear();

function Footer(){
    return (
        <p>copywright &nbsp; {currentYear}</p>
    )
}

export default Footer;