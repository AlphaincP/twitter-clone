import React from 'react';
import {MdHome, MdNotifications, MdSearch} from 'react-icons/md';
import {BsEnvelopeFill} from 'react-icons/bs';
import './Footer.css';

const Footer = ({activeTab,onTabChange}) => {
  return (
    <div>
      <div className='footer'>
        <div className='footer_icons'>
            <ul>
                <li className={`${activeTab === 0 && 'selected'}`}>
                <NavLink onClick={onTabChange} index={0}><MdHome className='f_icon'/></NavLink>
                </li>
                <li className={`${activeTab === 1 && 'selected'}`}>
                <NavLink onClick={onTabChange} index={1}><MdSearch className='f_icon'/></NavLink>
                </li>
                <li className={`${activeTab === 2 && 'selected'}`}>
                <NavLink onClick={onTabChange} index={2}><BsEnvelopeFill className='f_icon'/></NavLink>
                </li>
                <li className={`${activeTab === 3 && 'selected'}`}><NavLink onClick={onTabChange} index={3}><MdNotifications className='f_icon'/></NavLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

class NavLink extends React.Component{
    handleClick = () =>{
        this.props.onClick(this.props.index);
    }
    render(){
        return(
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        )
    }
}

export default Footer
