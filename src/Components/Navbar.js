import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render(){
        
    return (
        <div className="navbar">
            <h2 className="navbar-name"
                onClick = {this.scrollToTop}>FETHI AKCAY</h2>
            <div className="navbar-session ">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >About</Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contact</Link>
            </div>


        </div>
    );
    }
}

export default Navbar;