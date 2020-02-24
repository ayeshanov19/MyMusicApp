import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faThumbsUp, faBars,faBell, faShower, faHome, faUserFriends, faBroadcastTower, faMusic, faCog } 
from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom"
import People from './People';
import {Properties} from './Properties'
import Playlist from './Playlist'
import { getGlobal } from 'reactn';



class SideNav extends React.Component{
  constructor(props){
    super(props);
  }
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  

  
  render(){
    console.log('myglobalvalue',getGlobal().favourite)
    var myFavSong=getGlobal().favourite
    return( 
      <div className="container">
        <div className="row">
          <div className="col-4">    
            <div id="mySidenav"  className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                <hr color="white"></hr>
                <NavLink to=    {Properties.AUTHENTICATED_URL + "/Header"}     >Home</NavLink>
                <NavLink to=  {Properties.AUTHENTICATED_URL + "/people"}  >People</NavLink>
                <NavLink to= {{
                 pathname: Properties.AUTHENTICATED_URL + "/favourites" ,
                  myProps: {
                    myFavii : getGlobal().favourite
                  }
                  }}> Favourites</NavLink> 
                
                <a href="#">Music languages<FontAwesomeIcon icon={ faMusic }  size="1x"/></a>
                <a href="#">Settings<FontAwesomeIcon icon={ faCog }  size="1x"/></a>
            </div>
          </div>
        </div>
      </div>
    )   
  }
}

export default SideNav



// console.log('fav props',getGlobal().favourite.text)
// var helo=this.props.location.myProps['myFavii'];

// console.log('my text',helo.text)

// console.log('hi props',this.props.location.myProps.myFavii.text)
// var myFavourite=this.props.location.myProps['myFavii'];