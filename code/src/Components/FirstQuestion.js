import React, { useState } from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
    const onFormSubmit = (event) => {event.preventDefault()}
    const [error, setError] = useState('')
       
    return (
        <div className="main">
        <div className="container">
         <h1 tabIndex="0">Påskmiddagsformulär</h1>
        <p tabIndex="0">För att se om vi kan få ihop familjen för en påskmiddag, vänligen svara på några frågor:</p>
        <form onSubmit={onFormSubmit}>
            <label htmlFor="nameInput"> Skriv ditt namn </label>
                <input 
                    id="nameInput" 
                    type="text" 
                    value={nameInput} 
                    onChange={onNameInputChange}
                />
                {!!error.length && <div>{error}</div>}
        
             <button
                disabled= {nameInput === ''}
                onClick= {onStepChange}
                >
                 Nästa fråga 
                </button>
        </form>
     </div>
     </div>
    );
};

export default FirstQuestion;