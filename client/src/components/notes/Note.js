import React from 'react';
export const Note = ({note}) => {
    return(
        <div className ="note">
            <h1>{note.title}</h1>
            <h3>{note.author}</h3>
            <h3>{note.dateTime}</h3>
            <h3>{note.category}</h3>
            <h2>{note.description}</h2>
            <h3>{note.completed}</h3>
            <h3>{note.priority}</h3>
        </div>
    )
}