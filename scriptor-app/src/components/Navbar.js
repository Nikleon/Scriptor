import React, {Component} from 'react';
import './_Components.css';

class Navbar extends Component {
    render(){
        // if user notlogged in
        return(
            <div className="navbar">
                <div className="logo">SCRIPTOR</div>
                <div className="loginpopup" id="popUp">
                    <form action="/action_page.php" className="popup-container"></form>
                </div>
                <script>
                    function openPopUp) {
                        document.getElementById("popUp").style.display = "block";
                    }
                </script>
                <ul>
                    <li onlick="openPopUp()"><a href="#login">LOG IN</a></li>
                    <li><a href="#signup">SIGN UP</a></li>
                    <li><a href="#about">ABOUT</a></li>
                </ul>
            </div>
        );
        // if logged in
        /*return(
            <div class="navbar">
                <div class="logo">SCRIPTOR</div>
                <ul>
                    <li><a href="#login">LOG OUT</a></li>
                    <li><a href="#signup">FAVORITES</a></li>
                    <li><a href="#signup">HISTORY</a></li>
                    <li><a href="#about">ABOUT</a></li>
                </ul>
            </div>
        );*/
    }
}

export default Navbar;
