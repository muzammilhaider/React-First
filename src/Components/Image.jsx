import React from 'react';
import Logo from  '../Images/icecream.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <img src={Logo} />
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Image;