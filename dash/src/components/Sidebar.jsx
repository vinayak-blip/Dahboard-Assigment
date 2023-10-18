import React from 'react'
import {AiFillDashboard,AiOutlineMoneyCollect} from 'react-icons/ai'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BiSolidOffer,BiSolidHelpCircle} from 'react-icons/bi'
import profile from "../assets/profile.webp"

import 
{BsGrid1X2Fill, BsBoxFill}
 from 'react-icons/bs'

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <>
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" :""}>
            <div className="sidebar-wrapper">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <AiFillDashboard className='icon_header'/> Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href=""><BsGrid1X2Fill className='icon'/>Dashboard</a>
                </li>
                <li className="sidebar-list-item">
                    <a href=""><BsBoxFill className='icon'/>Products</a>
                </li>
                <li className="sidebar-list-item">
                    <a href=""><RiCustomerService2Fill className='icon'/>Customers</a>
                </li>
                <li className="sidebar-list-item">
                    <a href=""><AiOutlineMoneyCollect className='icon'/>Income</a>
                </li>
                <li className="sidebar-list-item">
                    <a href=""><BiSolidOffer className='icon'/>Promote</a>
                </li>
                <li className="sidebar-list-item">
                    <a href=""><BiSolidHelpCircle className='icon'/>Help</a>
                </li>
            </ul>
            <div className="sidebar-title profile">
                <div className="sidebar-brand login">
                    <div className='circle'>
                        <img src={profile} alt="profile" />
                    </div> 
                    <span>Vikash</span>
                </div>
            </div>
            </div>
        </aside>
    </>
  )
}

export default Sidebar;