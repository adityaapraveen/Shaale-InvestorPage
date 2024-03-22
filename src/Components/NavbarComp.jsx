import React from 'react'
import { FaSearch} from "react-icons/fa";
import './NavbarComp.css'

const NavbarComp = () => {
  return (
    <div>
        <div className="navbar">
            <div className="shaale-logo">Shaale</div>

            <div className="search-box">
                <input type="text" placeholder='Search' />
                <FaSearch className='search-icon'/>

            </div>
        </div>
    </div>
  )
}

export default NavbarComp
