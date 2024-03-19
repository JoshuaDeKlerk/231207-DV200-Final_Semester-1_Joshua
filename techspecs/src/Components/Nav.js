import React, { useState } from 'react';
import './StyleSheets/Nav.css';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { SideBarData } from './SidebarData';
import { SideBarDataCollapse } from './SidebarData';
import { IconContext } from 'react-icons';

function Nav() {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#ffffff' }}>
            <div className="navbar1">
                <div className='menu-bars1'>
                    <ul className='NavIcons1'>
                        <li>
                            <div className='CloseButtonCollapse'>
                                <FaBars onClick={showSideBar} />
                            </div>
                        </li>
    
                        {SideBarDataCollapse.map((item, index) => (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <div className='closeButtonBox'>
                                <span className='closeButton'>
                                    <IoIosCloseCircle />
                                    <p>Close</p>
                                </span>
                            </div>
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </IconContext.Provider>
    );
}

export default Nav;