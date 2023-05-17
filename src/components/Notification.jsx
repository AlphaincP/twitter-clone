import React from 'react';
import './Notification.css';
import img from './img/profile.png';
import { BsGear, BsTwitter } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Notification = () => {
  return (
    <div className='noti_page'>
        <div className='noti_noti'>
             <div className='notification'>
         <div className='noti_account'>
            <img src={img}/>
         </div>
         <div className='noti_name'>
            <h3>Notifications</h3>
         </div>
         <div className='noti_setting'>
            <BsGear className='noti_icon'/>
         </div>
      </div>
      <div className='noti_ul'>
        <ul>
            <li>All</li>
            <li>Verified</li>
            <li>Mentions</li>
        </ul>
      </div>
        </div>
     <div className='noti_content'>
        <NotiCard date='May 16,2023'/>
        <NotiCard date='April 11,2023'/>
        <NotiCard date='January 23,2022'/>
     </div>
    </div>
  )
}

const NotiCard = ({date}) =>{
    return(
        <div className='noti_card'>
            <BsTwitter className='n_ico'/>
            <p>There was a login to your account @owusunelson from a new device on {date}.Review it now.</p>
        </div>
    )
}

NotiCard.propTypes  = {
    date : PropTypes.string
}


export default Notification
