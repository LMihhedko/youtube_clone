import React from 'react';
import "../css/SideBar.css";
import {Link} from 'react-router-dom';
import {SideBarData} from './SideBarData.js';


function SideBar() {
    return (
        <div className = "sidebar">
            <ul className = "sidebar_list">
            <h4 className = "menu">MENU</h4>
            {SideBarData.map((row) => {
                return (
                    <div>
                    <li className="row">
                        <Link to={row.path} >
                            {row.icon}
                            <span>{row.title}</span>
                        </Link>
                    </li>
                    </div>
                )
            })}
            </ul>
        </div>
    )
}

export default SideBar
