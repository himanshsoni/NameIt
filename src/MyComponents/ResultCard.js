import React from 'react'
import "./ResultCard.css";
export const ResultCard = ({suggestedName}) => {
    return (
        <div className="result-card">
            <p className="result-name"> {suggestedName}</p>
        </div>
    )
}
