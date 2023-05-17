import React from 'react';
import { BsGear, BsSearch, BsThreeDots } from 'react-icons/bs';
import './Explore.css';
import Card from './Card';
import img from './img/profile.png';

const Explore = () => {
  return (
    <div>
      <div className='explore'>
        <div className='explore_header'>
            <div className='exp_account'>
               <img src={img}/>
            </div>
            <div className='exp_input'>
                <input type='text' placeholder={`${<BsSearch className='exp_search'/> ,'Search twitter'}`}/>
            </div>
            <div className='exp_setting'>
                <BsGear className='exp_icon'/>
            </div>
        </div>
        <div className='exp_body'>
            <h3>Trends for you</h3>
            <div className='trend_card'>
                <div className='trend_detail'>
                    <h5>Trending in Ghana</h5>
                <h4>Mohammed Kudus</h4>
                </div>
                <div className='trend_more'>
                    <BsThreeDots/>
                </div>
            </div>
            <div className='trend_card'>
                <div className='trend_detail'>
                    <h5>Trending in Ghana</h5>
                <h4>King Nasir</h4>
                </div>
                <div className='trend_more'>
                    <BsThreeDots/>
                </div>
            </div>
            <div className='trend_card'>
                <div className='trend_detail'>
                    <h5>Trending in Ghana</h5>
                <h4>SportyBet</h4>
                <h5>123k tweets</h5>
                </div>
                <div className='trend_more'>
                    <BsThreeDots/>
                </div>
            </div>
            <div className='trend_card'>
                <div className='trend_detail'>
                    <h5>Trending in Ghana</h5>
                <h4>Vodafone</h4>
                <h5>167k tweets</h5>
                </div>
                <div className='trend_more'>
                    <BsThreeDots/>
                </div>
            </div>
            <a href=''>Show more</a>
        </div>
      </div>
      <Card/>
    </div>
  )
}

export default Explore
