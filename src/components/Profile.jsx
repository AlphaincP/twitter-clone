import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import img from './img/profile.png';
import './Profile.css';

const Profile = () => {
  return (
    <div>
      <div className='profile_profile'>
        <div className='profile_img'>
            <img src={img}/>
        </div>
        <div className='profile_details'>
          <h3>Owusu Nelson</h3>
          <p>@otnelson</p>
        </div>
        <div className='profile_more'>
            <BsThreeDots/>
        </div>
      </div>
    </div>
  )
}

export default Profile
