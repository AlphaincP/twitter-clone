import React, { useEffect, useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import profile from './img/profile.png';
import './Homepage.css';
import Card from './Card';
import CardPage from './Card';
import FollowPage from './FollowCard';




const Header = ({activeTab,onTabChange}) =>{
    
    const [isSticky,setSticky] = useState(false);

    useEffect(() =>{
        function scrollHeader(){
            if(window.scrollY >=80){
                setSticky(true);
            }else{
                setSticky(false);
            }
        }
        window.addEventListener('scroll',scrollHeader);
    })

    return(
        <div className={`${isSticky ? 'Header sticky':'Header'}`}>
            <h3>Home</h3>
           <div className='top_header'>
            <img src={profile}/>
            <div className='tlogo'>
                 <BsTwitter className='t_log'/>
            </div>
           
           </div>
           <div className='header_nav'>
            <ul className='header_ul'>
                <li className={`li ${activeTab === 0 && 'selecte'}`}>
                <NavLink onClick={onTabChange} index={0}>     For you</NavLink>
                    </li>
                <li className={`li ${activeTab === 1 && 'selecte'}`}>
                <NavLink onClick={onTabChange} index={1}>  Following </NavLink>
                    </li>
               
            </ul> 
            
           </div>
        </div>
    )
}

class Homepage extends React.Component{

    state = {
        activeTab : 0
    }

    handleTabChange = (index) =>{
       this.setState({
        activeTab : index
       })
    }

   renderContent(){
    switch(this.state.activeTab){
        default : 
        case 0 : return <Card/>
        case 1 : return <Card/>
    }
   }

    render(){
        let activeTab = this.state;
        return(
            <div className='Homepage'>
                <Header activeTab={activeTab} onTabChange={this.handleTabChange}/>
               
                <div className='home_content'>
                     <div className='home_follow'>
                    <FollowPage/>
                </div>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
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

export default Homepage
