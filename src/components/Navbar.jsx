import React from 'react';
import { BsBookmark, BsEnvelopeFill, BsHash, BsList, BsPerson, BsThreeDots, BsTwitter } from 'react-icons/bs';
import { MdHome, MdNotifications } from 'react-icons/md';
import './Navbar.css';
import Profile from './Profile';

const Navbar = ({activeTab,onTabChange}) => {
  return (
    <div>
      <div className='Navbar'>
        <ul className='ul'>
          
                <div className='logo'>
            <BsTwitter className='t_logo'/>
         </div>
             <div className='li_list'>
                 <li className={`${activeTab === 0 && 'selected'}`}>
             <NavLink onClick={onTabChange} index={0}>    <MdHome className='n_icon'/>
                <span>Home</span></NavLink>
             </li>
             <li className={`${activeTab === 1 && 'selected'}`}>
             <NavLink onClick={onTabChange} index={1}> <BsHash className='n_icon'/>
                <span>Explore</span></NavLink>
             </li> 
             <li cclassName={`${activeTab === 2 && 'selected'}`}>
             <NavLink onClick={onTabChange} index={2}>  <BsEnvelopeFill className='n_icon'/>
                <span>Messages</span></NavLink>
             </li>
             <li className={`${activeTab === 3 && 'selected'}`}>
             <NavLink onClick={onTabChange} index={3}>
               <MdNotifications className='n_icon'/>
                <span>Notifications</span>
               </NavLink>   
             </li>
            
             <li className={`${activeTab === 0 && 'selected'}`}>
                <BsList className='n_icon'/>
                <span>Lists</span>
             </li>
             <li className={`${activeTab === 0 && 'selected'}`}>
                <BsBookmark className='n_icon'/>
                <span>Bookmarks</span>
             </li>
             <li className={`${activeTab === 0 && 'selected'}`}>
                <BsPerson className='n_icon'/>
                <span>Profile</span>
             </li>
             <li className={`${activeTab === 0 && 'selected'}`}>
                <BsThreeDots className='n_icon'/>
                <span>More</span>
             </li>
             
             </div>
           
             
                <button className='t_button'>Tweet</button>
             

        </ul>
  <div className='profile_p'>
   <Profile/>
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


export default Navbar
