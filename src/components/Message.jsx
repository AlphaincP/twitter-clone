import React from 'react';
import './Notification.css';
import img from './img/profile.png';
import { BsGear, BsTwitter } from 'react-icons/bs';
import './Messages.css';
import Time from './time';

const Message = () => {
  return (
    <div>
      <div className='message'>
      <div className='noti_noti'>
             <div className='notification'>
         <div className='noti_account'>
            <img src={img}/>
         </div>
         <div className='noti_name'>
            <h3>Messages</h3>
         </div>
         <div className='noti_setting'>
            <BsGear className='noti_icon'/>
         </div>
      </div>
        </div>
        <div className='message_body'>
            <div className='message_input'>
                <input type='text' placeholder='search direct messages'/>
            </div>
            <div className='messages'>
                <div className='message_message'>
                    <div className='message_image'>
                        <img src={img}/>
                    </div>
                    <div className='message_details'>
                        <h4>Selina Gomez <span>@selenagomez . <Time time='2023-03-12 18:34:23'/> </span></h4>
                        <p>I need you to feature me hun</p>
                </div>
            </div>
            <div className='message_message'>
                    <div className='message_image'>
                        <img src={img}/>
                    </div>
                    <div className='message_details'>
                        <h4>Bill Gates <span>@billgates . <Time time='2023-05-12 18:34:23'/> </span></h4>
                        <p>I owe you 100Billion right?</p>
                </div>
            </div>
            <div className='message_message'>
                    <div className='message_image'>
                        <img src={img}/>
                    </div>
                    <div className='message_details'>
                        <h4>Elon Musk <span>@elonmusk . <Time time='2023-01-12 18:34:23'/> </span></h4>
                        <p>Is the gob3 ready? I'm quite hungry</p>
                </div>
            </div>
            <div className='message_message'>
                    <div className='message_image'>
                        <img src={img}/>
                    </div>
                    <div className='message_details'>
                        <h4>Mark Zukerberg<span>@markzukerberg . <Time time='2023-03-12 18:34:23'/> </span></h4>
                        <p>chale send me 20 cedis for bet</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Message
