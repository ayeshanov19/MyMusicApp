import React from 'react'
import Front  from './Front'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header'
import People from './People'
import Home from './Header'
import {Properties} from './Properties'
import {BrowserRouter} from "react-router-dom"
import logo from './logo.svg';
//import './App.css';
import Playlist from './Playlist'
import Navigation from './Navigation'
import  './Head.css'
import './main.css'
import Bell from './Bell'
//import Ex from './Ex'
//import dont from './images/dont_let_me_down.mp3'
import Player from './Player'
import ChildToParent from './ChildToParent'
import Parent from './Parent'
import ParentGp from './ParentGp'
import ImageComp from './ImageComp'
import SignPage from './SignPage'
import SignUpUser from './SignUpUser'
import MyLoginPage from './MyLoginPage'
import  favTracks from'./Favourites'
import Favourites from './Favourites'
import  { setGlobal } from 'reactn';
import  { getGlobal } from 'reactn';
//import Playlist from './Playlist'


var clicks;
var dataRec;
class Content extends React.Component
{
constructor(props) {
    console.log("hi");
    super(props)
    this.fetchDataFromChild = this.fetchDataFromChild.bind(this);
    this.state={dataRec: '' , click:0, checkRegister:'false',isLoggedIn:'false'}
    this.clicledSong=this.clicledSong.bind(this)
    }
  
  
    fetchDataFromChild(data,clicks){  
      console.log("DAT REC FROM CHILD IS", data);
    //   console.log("DAT REC FROM CHILD IS", this.state.click);
      this.setState({dataRec:data,click:clicks})
      console.log("DAT REC FROM CHILD IS", this.state.click);
    }
    
  
    
    clicledSong(e)
    {
    console.log('click'+e.target.id)
    var clicked= e.target.id
    }
    render()
    {
        console.log('get',getGlobal().favClicked);
        return (
        
            
            <div className="App">
    
           <Player songs = {this.state.dataRec} clickIndex={this.state.click}></Player> 
            <BrowserRouter>
                <Switch>
                <Route path=    {Properties.AUTHENTICATED_URL + "/header"}   exact render={props =>
                    <div>
                    <Header mode='MY MUSIC APP' />
                    <Front getDataFrmChild = {this.fetchDataFromChild.bind(this)}/>
                    </div>} />
                    <Route path=    {Properties.AUTHENTICATED_URL + "/people"}   exact render={props =>
                    <div>
                    {/* <Header mode='MY MUSIC APP' /> */}
                    <People getDataFrmChild = {this.fetchDataFromChild.bind(this)}/>
                    </div>} />


                {/* <Route path= {Properties.AUTHENTICATED_URL + "/people"}   component={People}   /> */}
                {/* <Route path="/Bell" component={Bell} /> */}
                <Route path=  {Properties.AUTHENTICATED_URL + "/playlist"}  component={Playlist}/>
                 <Route path= {Properties.AUTHENTICATED_URL +  "/favourites"} component={Favourites}  />
                </Switch>
            </BrowserRouter>     
          
        </div>


       
              )
    
    }
}

export default Content;