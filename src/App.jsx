import React from "react"
import header from "./components/Header";
import footer from "./components/Footer";
import note from "./components/Note";

function App(){
    return (
        <div>
            {header()}
            {note()}
            {footer()} 
        </div>
    )
};

export default App;