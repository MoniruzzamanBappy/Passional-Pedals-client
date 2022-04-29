import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="page-footer text-white  bg-dark font-small blue pt-4">
    <div className="container-fluid container text-md-left">
        <div className="row">
           <div className="col-md-6 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a className="nav-link text-white" href="#!">About Passional Pedals</a></li>
                    <li><a className="nav-link text-white" href="#!">Read our Blog</a></li>
                    <li><a className="nav-link text-white" href="#!">Signup to be Happy</a></li>
                    <li><a className="nav-link text-white" href="#!">Add your list</a></li>
                </ul>
            </div>

            <div className="col-md-6 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a className="nav-link text-white" href="#!">Get Helps</a></li>
                    <li><a className="nav-link text-white" href="#!">Read FAQs</a></li>
                    <li><a className="nav-link text-white" href="#!">View All Services</a></li>
                    <li><a className="nav-link text-white" href="#!">Branches</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="container">
        <p className="text-muted text-center pb-3">Copyright © {new Date().getFullYear()}  Passional Pedals</p>
        
    </div>

</footer>
    );
};

export default Footer;