import React from 'react';
import img from './img/profile.png';
import img2 from './img/timg1.jpg';
import './Card.css';
import Time from './time';
import { BsArrowReturnLeft, BsChat, BsHeart, BsMessenger, BsReverseBackspaceReverse, BsRewind, BsThreeDots } from 'react-icons/bs';
import { tweets } from './data';


const Card = ({}) => {
  
  return (
    <div className='card_page'>
      {tweets.map(tweet =>
         <div className='card'>
        <div className='card_image'>
          <img src={img}/>
        </div>
        <div className='card_details'>
          <h3>{tweet.name} <span>@{tweet.username}</span></h3>
          <p className='t_time'><Time time={tweet.time}/></p>
          <div className='tweet'>
            <p>{tweet.body}</p>
            <img src={tweet.image}/>
          </div>
          <div className='card_icons'>
            <ul className='icon_ul'>
              <li><BsHeart/><span>{tweet.likes}</span></li>
              <li><BsArrowReturnLeft/><span>{tweet.retweet}</span></li>
              <li><BsChat/><span>{tweet.comment}</span></li>
            </ul>
          </div>
        </div>
        <div className='card_more'>
          <BsThreeDots/>
        </div>
      </div>
        )}
       
      
      
    </div>
  )
}


export default Card



