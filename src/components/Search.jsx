import React from 'react';
import './Search.css';
import { BsThreeDots } from 'react-icons/bs';

const Search = () => {
  return (
    <div>
      <div className='search'>
        <div className='search_input'>
            <input type='text' placeholder='Search Twitter'/>
        </div>
        <div className='search_body'>
        <div className='exp_bod'>
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
                <h4>WKHKYD</h4>
                <h5>123k tweets</h5>
                </div>
                <div className='trend_more'>
                    <BsThreeDots/>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Search
