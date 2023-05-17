import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './FollowCard.css';
import img from './img/timg1.jpg';
import img1 from './img/timg2.jpg';
import img2 from './img/timg3.jpg';

const FollowCard = () => {
  return (
    <div>
      <div className='follow_card'>
        <div className='follow_image'>
            <img src={img}/>
        </div>
        <div className='follow_details'>
            <h3>Bernado Silva</h3>
            <p>@BernadoSilva</p>
            <h4>Manchester City FC Football player</h4>
        </div>
        <div className='follow_button'>
            <button>follow</button>
        </div>
      </div>
      <div className='follow_card'>
        <div className='follow_image'>
            <img src={img1}/>
        </div>
        <div className='follow_details'>
            <h3>Revion</h3>
            <p>@revion</p>
            <h4>Hold nothing back #LIVEBOLDLY</h4>
        </div>
        <div className='follow_button'>
            <button>follow</button>
        </div>
      </div>
      <div className='follow_card'>
        <div className='follow_image'>
            <img src={img2}/>
        </div>
        <div className='follow_details'>
            <h3>Owusu Nelson</h3>
            <p>@owusunelson</p>
            <h4>CEO of 45bits, Business Mandate</h4>
        </div>
        <div className='follow_button'>
            <button>follow</button>
        </div>
      </div>
    </div>
  )
}

const FollowPage = () =>{
    return(
        <div className='follow_page'>
          <div className='follow_header'>
             <h3>Who to follow</h3>
             <BsThreeDots className='f_ico'/>
          </div>
          <div className='follow_content'>
            <FollowCard/>
          </div>
          <h4><a href=''>Show more</a></h4>
        </div>
    )
}

export default FollowPage
