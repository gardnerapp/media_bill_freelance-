
import React from "react";
import "../style/banner.css"

function StickyBanner() {

    return (<div>
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <a className="navbar-brand cursive-title" href="#">Jonathan Belen </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto banner-items ">
                        <li className="nav-item">
                            <i className="fab fa-youtube" style={{color: "tomato"}}>
                            </i>
                        </li>
                        <li className="nav-item">
                            <i className="fab fa-instagram"></i>
                        </li>
                        <li className="nav-item">
                            <i className="fab fa-facebook-square"></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>);
}

export default StickyBanner;