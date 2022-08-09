import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

const AllNotes = notes.map(note => <Note 
    key={note.key}
    title={note.title}
    content={note.content}
/>)


function App(){
    return (
        <div>
            <Header />
            {AllNotes}
            <Footer /> 
        </div>
    )
};

export default App;