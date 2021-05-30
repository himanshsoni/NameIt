import React from 'react'
import "./Result.css";
import { ResultCard } from './ResultCard';
export default function Result({suggestedNames}) {
    const suggestedNamelst=suggestedNames.map((suggestedName)=>{
        return <ResultCard key={suggestedName} suggestedName={suggestedName}/>
    })
    return (
        <div className="results-container">
            {suggestedNamelst}
        </div>
    )
}
