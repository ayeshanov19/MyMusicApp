import React from 'react'
import { Media } from 'reactstrap';
import Favourites from './Favourites'
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import pic from './images/Free_Sample_By_Wix.jpeg'
import  './Head.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faThumbsUp, faBars,faBell, faShower, faComment, faAngleDoubleDown, faAngleDown, faAngleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import './bell.css'
import './main.css'
import './Side.css'
import SideNav from './SideNav'
//import "lib/animate.css";
import {NavLink} from "react-router-dom"
import Front from './Front'
//import Top from './Top'var styles = {
import People from './People'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { importDeclaration } from '@babel/types';
//import { withRouter } from 'react-router'
import pic2 from './images/People.gif'
import Bell from './Bell'
import  { Redirect } from 'react-router-dom';
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory
} from 'history';
import { withRouter } from 'react-router-dom';

	var styles ={
    color: 'black',
    position: "relative",
    //fontSize: "2em",
   // marginTop:"10%",
    //cursor: "pointer",
    marginRight:"auto",
    width: "32px",
    height: "50px",
    //position: "relative",
    top: "22px",
    marginRight: "auto"
  };

  var rightbut={

    float:"right",
    color: 'black',
    position: "relative",
    marginRight:"auto",
    width: "32px",
    height: "50px",
    top: "22px",
    marginRight: "auto"}

    
var noti={
  borderColor:"pink",
  borderStyle:"solid",
  borderRadius:"70px 70px 70px"
}

var com={
  display:"none"
}



var im={
  height:"102px" ,
  //marginLeft:"9%",
  //marginTop:"0%"
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
}

var cont={
  backgroundColor:"lightpink",
  height:"99px"
}

var inp={
    width: "420%",
    padding: "50px 0px",
    textAlign: "center",
    backgroundColor: "lightblue",
    marginTop: "-77px",
    display: "none",
   // height: "137px",
    marginRight: "66%",
    marginLeft: "-299%",
    animation: "0.8s bounceInLeft"

}

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={modeOfApp:this.props.mode,notcount :2,currPath:''};
    // this.setSearchBar = this.setSearchBar.bind(this);
  } 
  
  
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
  }

  openSearch()
   {
    var x = document.getElementById("myDIV");
   
    if (x.style.display === "none") {
      x.style.display = "block";
     
    } else {
      x.style.display = "none";
    }
    
  
    
  }

  
  
  
  render(){
    var centreheading;
    var rightbutton;
    var leftbut;
    var searchbar
    var sideNavButton;
    if(this.state.modeOfApp == 'MY MUSIC APP'){
      centreheading = <centre><img src={pic} style={im}/> </centre>
       rightbutton = <FontAwesomeIcon icon={ faSearch }  style={rightbut}
     
          onClick={this.openSearch}   size="2x" />

      searchbar= <input type="text" id="myDIV" style={inp} placeholder="Search for a Song" />
      sideNavButton = <FontAwesomeIcon icon={ faBars }  style={styles} onClick={this.openNav} size="2x"/>  
    }
    if(this.state.modeOfApp =='settings'){
      centreheading ='MY SETTINGS'
    }
    if(this.state.modeOfApp =='People'){
      centreheading =<centre><img src={pic2} style={im} /></centre>
      sideNavButton=   <FontAwesomeIcon icon={ faBars }  style={styles} onClick={this.openNav} size="2x"/>
      rightbutton = <FontAwesomeIcon icon={ faBell }  style={rightbut}     size="2x" /> 
    }
    if(this.state.modeOfApp =='albumname'){
      var albumNm =this.props.album;
      centreheading =  <centre><h1  style={{position: "relative",
       textAlign:"center",
      top: "22px",
      marginRight: "auto"}}>{albumNm.albumName}</h1></centre> 
      leftbut = <FontAwesomeIcon icon={ faAngleLeft } style={styles} onClick={() => this.props.history.go(-1)} /> 
      rightbutton = <FontAwesomeIcon icon={ faBell }  style={rightbut}size="2x" />
    }



    if(this.state.modeOfApp =='favouriteSongs'){
     
      centreheading =  <centre><h1  style={{position: "relative",
       textAlign:"center",
      top: "22px",
      marginRight: "auto"}}>Favs</h1></centre> 
      leftbut = <FontAwesomeIcon icon={ faAngleLeft } style={styles} onClick={() => this.props.history.go(-1)} /> 
      rightbutton = <FontAwesomeIcon icon={ faBell }  style={rightbut}     size="2x" />
    }

    
      return(
        <div>
          <SideNav/>
          <div class="container-fluid" style={cont}>
            <div className="row" >
              <div className="col-4">
                {sideNavButton}
              {leftbut}  
              </div>
              <div className="col-4">
                <centre>{centreheading}</centre>
              </div>
              <div className="col-4" >
              {rightbutton} 
               
               {searchbar}
  

              </div>
            </div>
          </div>
        </div>
      )
    
  }
}
export default withRouter(Header)
