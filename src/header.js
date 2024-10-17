import React, { Component } from "react";
import './index.css';
import logo from "./image/header .logo.png"

class Navbar extends Component {
    render() {
        return (
            <>
                <header data-aos="fade-up" data-aos-duration="1200">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                        <div class="nav-logo">
                            <img src={logo}></img>
                        </div>
                            <a className="navbar-brand" href="#">SKS HOSPITAL</a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#service">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#doctor">Doctor</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className="btn nav-btn btn-outline-success" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>

                 
                </header>
            </>
        );
    }
}

export default Navbar;
