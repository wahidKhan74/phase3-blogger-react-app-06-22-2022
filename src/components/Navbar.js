import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >Big eCom</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" to="/blogs">Electronics</a></li>
                    <li><a className="dropdown-item" href="#">Fashion</a></li>
                    <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
                    <li><a className="dropdown-item" href="#">Books</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;