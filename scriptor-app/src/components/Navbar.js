import React, {Component} from 'react';
import './_Components.css';
import Popup from './Popup';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({showPopup: !this.state.showPopup});
    }

    render(){
        // if user notlogged in
        return(
            <div className="navbar">
                <div className="logo">SCRIPTOR</div>
                <ul>
                    <li onClick={this.togglePopup.bind(this)}><a href="#login">LOG IN</a></li>
                    <li><a href="#signup">SIGN UP</a></li>
                    <li><a href="#about">ABOUT</a></li>
                </ul>
                {this.state.showPopup ?
                <Popup
                    text='Click to hide'
                    closePopup={this.togglePopup.bind(this)}
                />
                : null
                }
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
