import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { SideNav } from './SideNav'
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="container">
            <Header></Header>
            <Navbar />
            <SideNav />
            <Outlet />
        </div>
    )
}
