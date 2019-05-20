import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            isTop: true,
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 100;
          if (isTop !== this.state.isTop) {
            this.onScroll(isTop);
          }
        });
    }
    
    onScroll = (isTop) => {
        this.setState({ isTop });
     }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    
    render(){
        
    return (
        <div className = {"navbar-" + (this.state.isTop ? "unscrolled" : "scrolled")} >
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