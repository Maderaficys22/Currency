import React from "react";
import './header.style.css'

const Header = ({rates, currentDate}) => {
    return(
        <div className="header">
            <h5>Актуальний курс валют станом на: {currentDate}</h5>
            <ul>
                <li >dollar:  {(rates.UAH)?.toFixed(2)}</li>
                <li>euro:  {(rates.EUR * rates.UAH)?.toFixed(2)}</li>
            </ul>
        </div>
    )
}


export default Header