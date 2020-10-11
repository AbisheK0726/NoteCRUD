import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import{Note} from './Note.js';
import {ErrorMsg} from '../ErrorMsg';

export const ViewNotes = () =>{
    const [notes, setNotes] = useState();
    const [error, setError] = useState();
    
    useEffect(() =>{
        const getNotes = async() => {
            try {
                const allNotes = await Axios.get("/notes")
                setNotes(allNotes.data.data)

            } catch (error) {
                error.response.data.error.message && setError(error.response.data.error.message);
            }
        }
        getNotes();
    },[]);




    return(
        <>
        {error &&
            <ErrorMsg error = {error} clearError = {() => setError(undefined)}/>
        }
        <h1>Notes</h1>
        <div className = "notes">
            {notes?(
                notes.map(note =>(
                    <Link to = {"/notes/" +note._id}>
                        <Note key = {note._id} note = {note}/>
                    </Link>
                ))

            ):(
                <h2> No Notes</h2>
            )}

        </div>
        </>
    )



}