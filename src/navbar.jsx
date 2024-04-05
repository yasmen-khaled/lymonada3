import React from "react";
import { Helmet } from "react-helmet";
import logo from '../img/logo.png'; // Import the logo

function Navbar() {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
            </Helmet>
            
            <div className="topnav" id="myTopnav">
              
                <a href="#home" className="active">Home</a>
                <a href="#news">features</a>
                <a href="#contact">story</a>
               
                
            </div>
        </>
    );
}

export default Navbar;
