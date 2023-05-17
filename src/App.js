import React , {Component} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import Homepage from './components/Homepage';
import Explore from './components/Explore';
import Notification from './components/Notification';
import Message from './components/Message';
import Search from './components/Search';

class App extends Component{
    

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
        case 0 : return <Homepage/>
        case 1 : return <Explore/>
        case 2 : return <Message/>
        case 3 : return <Notification/>
    }
   }

  render(){
    let activeTab  = this.state;
    return(
        <div className='App'>
            
            <div className='app_navbar'>
                <Navbar activeTab={activeTab} onTabChange={this.handleTabChange}/>
            </div>
            <div className='app_content'>
                <div className='app_footer'>
                  <Footer activeTab={activeTab} onTabChange={this.handleTabChange}/>
            </div>
                {
            this.renderContent()
        } 
            </div>
        <div className='app_right_content'>
            <Search/>
        </div>

        </div>
    )
  }
}
export default App;
