import React from 'react';
import Logo from  '../Images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={Logo} alt="" width={100} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Header;