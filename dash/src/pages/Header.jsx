import React from 'react'
import { BsSearch, BsJustify} from 'react-icons/bs';

const Header = ({OpenSidebar}) => {
  return (
    <header className='header'>
        <div className="menu-icon">
            <BsJustify onClick={OpenSidebar}/>
        </div>
        <div className="header-left">
            DASHBOARD
        </div>
        <div className="header-right">
            <input type="text" className='search'/>
            <BsSearch className='search-icon'/>
        </div>
    </header>
  )
}

export default Header