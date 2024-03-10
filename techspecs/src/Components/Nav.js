import React, {useState} from 'react';
import './StyleSheets/Nav.css';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { SideBarData } from './SidebarData';
import { SideBarDataCollapse } from './SidebarData';
import { IconContext } from 'react-icons';


function Nav() {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar)
    return ( 
        <>
        <IconContext.Provider value={{color: '#fffff'}}>
            <div className="navbar">
                <div className='menu-bars'>
                    <FaBars onClick={showSideBar}/>
                    {SideBarDataCollapse.map((item, index) => {
                        return (
                            <div className='smallIcons'>
                                <li key={index} className={item.cName}>
                                    <Link to ={item.path}>
                                        {item.icon}
                                    </Link>
                                </li>                            
                            </div>
                        )
                    })}
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <div className='closeButtonBox'>
                                <span className='closeButton'>
                                    <IoIosCloseCircle />
                                    Close
                                </span>
                        </div>
                    </Link>
                </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to ={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>  
        </IconContext.Provider>      
        </>
     );
}

export default Nav;