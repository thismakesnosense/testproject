import React from "react";
import {useLocation} from "react-router-dom";
const UseLocation = useLocation();
class Navbar extends React.Component {
    isActive(Navitem){
        return UseLocation.pathname === Navitem
        
    } 

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <a className="navbar-brand" href="#">Nathan olenik</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Collapsible button --> */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">

                        {/* <!-- The links of our navbar --> */}
                        <li className={`nav-item ${this.isActive("bio") ? "active":""}`}>
                            <a className="nav-link" href="bio">About Me <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Portfolio</a>
                        </li>

                        {/* <!-- a Dropdown menu --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>


                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;