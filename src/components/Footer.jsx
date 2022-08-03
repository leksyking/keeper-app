import React from "react";

let today = new Date();
let currentYear = today.getFullYear();

function Footer(){
    return (
        <footer>
            <p>copywright &copy; {currentYear}</p>
        </footer>  
    )
}

export default Footer;