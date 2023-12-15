import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types'
export class Navbar extends Component {
    render() {
        return (
            <nav className="bg-blue-500 flex items-center justify-between h-13 p-5 text-white text-lg">
                <div>
                    <NavLink to="/">
                        <i className={this.props.icon}>{this.props.title} </i>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/users">
                        <i className="relative p-2 rounded-md bg-green-300 text-lg text-white">About</i>
                    </NavLink>
                </div>
            </nav>
        );
    }
}
//Defaultprops bizim dişardan çagırmadan içerden tanımlamazı saglar parametreleri dışardan degilden içerdende parametre yollamış oluyoruz
/* Navbar.defaultProps={
    title:'Github Finder',
    icon:'fa-brands fa-github'
} */
//prototype sayesinde zorunlu alan kılmış oluyoruz mesal string olacak number olacak gibi degitirdiginmiz ön bilgi 
/* Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
} */

export default Navbar;
