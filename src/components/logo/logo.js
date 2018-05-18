import React from 'react';
import './logo.css';
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = props => {
    return (
        <div className="Logo">
                <img src={burgerLogo} alt="MyBurger" />
            </div>
    );

};

export default logo;
