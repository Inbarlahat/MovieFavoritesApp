import React from "react";
import "../App.css";

const Header = (props) => {    
    return(
        <div class='col'> 
        <h1>{props.heading}</h1>
        </div>
    );
}

export default Header;