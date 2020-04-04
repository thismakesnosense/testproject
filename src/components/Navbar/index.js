import React from "react";


class Navbar extends React.Component {
    
    componentDidMount(){
        document.querySelectorAll("button").forEach(item => {
            item.addEventListener("mouseover", function(event) {
               item.className = "animated jello";
            })
            item.addEventListener("mouseout", function(event) {
                item.classList.remove("animated");
                item.classList.remove("jello"); 
             })
    })
    }

    isActive(Navitem){
        return window.location.href.includes(Navitem);
        
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

                        <li className={`nav-item ${this.isActive("portfolio") ? "active":""}`}>
                            <a className="nav-link" href="portfolio">Portfolio</a>
                        </li>

                        {/* <!-- a Dropdown menu --> */}
                        <li className={`nav-item ${this.isActive("contact") ? "active":""}`}>
                            <a className="nav-link" href="contact">Contact</a>
                        </li>


                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;