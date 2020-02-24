import React from 'react'
import SideNav from './SideNav';
import Header from './Header'
import { Container, Row, Col } from 'reactstrap';
//import {  MDBView } from "mdbreact";
import sunidhi from './images/sunidhi.jpg'
import shreya from './images/shreya.jpg'
import arijit from './images/arijit.jpg'
import sonu from './images/sonu.jpg'
import neha from './images/neha.jpeg'
import atif from './images/atif.jpg'
import pretty from './images/Pretty Woman - Shahrukh Khan.mp3'
import tera from './images/Tera Hua (Loveratri) Djpunjab.com.mp3'
import ankho from './images/01  Aankhon Mein Teri (Om Shanti Om) PagalworldS.me.mp3'
import Playlist from './Playlist'
import terahua from './images/tera hua.jpg'
import ajab from './images/ajab si.jpg'
import prettyimg from './images/pretty.jpg'


var person= {
    border: "10px solid transparent",
    marginBottom: "25px",
    width: "80",
    height:" 80%",
    opacity: "0.7"
}
var icons=[];
var count=0;

var artists=[];

class  People extends React.Component
{

    constructor(props)
    {
        super(props)
        console.log()
        this.followButton=this.followButton.bind(this);
        this.following=this.following.bind(this);
        this.artistButton=this.artistButton.bind(this);
        this.showAnothercomponent=this.showAnothercomponent.bind(this);
        this.state={defau:'def', following:'', artist:'' ,showComponent:'', artistsList:
        
        this.artists = 
    
        [{
            photo: atif,
            followers: 55,
            artistName: 'Atif aslam',
            following: 'no',
            objid: '0',
            albums: [{
                albumName: 'ATIF',
                coverphoto: atif ,
                songs: [{
                        song: tera,
                        artist: terahua,
                        text: "Tera hua"
                    },
                    {
                        song: "",
                        artist: "",
                        text: "pehli dafa"
                    }
                ]
            }]
        },



        {
            photo: arijit,
            followers: 55,
            artistName: 'arijit singh',
            following: 'no',
            objid: '1',
            albums: [{
                albumName: 'ARIJIT',
                coverphoto: arijit,
                songs: [{
                        song: ankho,
                        artist: ajab,
                        text: "Ajab si"
                    },
                    {
                        song: "",
                        artist: "",
                        text: " pehli baar"
                    }
                ]
            }]
        },

        {      
            photo: sonu,
            followers: 55,
            artistName: 'sonu nigham',
            following: 'no',
            objid: '2',
            albums: [{
                albumName: 'SONU',
                coverphoto: sonu,
                songs: [{
                        song: pretty,
                        artist: prettyimg,
                        text: "Pretty woman"
                    },
                    {
                        song: "",
                        artist: "",
                        text: "kal ho na ho"
                    }
                ]
            }]

        


        }
    ]
        };//endof state
        
} // end of constructor

    

    

    
    

    followButton = (e) => {
        var id=e.target.id;
        this.artists[id].following = "yes" ;
        console.log("targeted value" +e.target.value);
        if(e.target.value == "following"){
          this.setState({artistsList: this.artists[id].following="no"})
        }
       
        // if(e.target.value == "follow"){
        //     this.setState({artistsList: this.artists[id].following="yes"})
        //   }
          console.log("targeted value2" +e.target.value);
        this.setState({artistsList:this.artists});
    }

    following(){
    this.setState({following:"nowFollowing"});
    }



    showAnothercomponent(e){
     var elem =  e.target.id;
     console.log('elem',elem);
     this.setState({showComponent:true,itemToRender:elem})
    }


    artistButton(){
       
    console.log("artists" +this.state.following);
    this.setState({following:"backToartist"});
    }
    

   
    render(){  
        var img_cont=[];
        console.log( "state",this.state.following);
        if(this.state.defau == "def" && this.state.following!="nowFollowing"){    
            for(var i=0;i<this.state.artistsList.length; i++){
                img_cont.push(
                    <ul className="list-group">
                        <li   className="list-group-item d-flex justify-content-between align-items-center">                         
                            <img key={i} id={i} src={this.state.artistsList[i].photo}className="img-responsive" style={{borderRadius: "50%",width:"150PX"}}
                             onClick={this.showAnothercomponent}>
                              </img>
        
                    
        
                                <button onClick={this.followButton} className="badge badge-primary badge-pill" id={this.state.artistsList[i].objid}  
                                 value = {this.state.artistsList[i].following == 'yes' ? 'following' :'follow'} onClick={this.followButton}>
                                {this.state.artistsList[i].following == 'yes' ? 'following' :'follow'}
                                </button>
                        </li> 
                    </ul>
                )

                if(this.state.showComponent){
                   
                    //console.log("mydata",this.artistsList[0].albums[0])
                   console.log("hey", this.state.artistsList);
                   console.log("to be send",this.state.artistsList[i].albums);
                   
                   return(
                   <Playlist
                   songs={this.state.artistsList[this.state.itemToRender].albums[0]} sendatatoplayer={this.props.getDataFrmChild}></Playlist>
                   
                )
                }


            }

        
            
            return(  
                <div>
                     <Header mode='People'/>
                    <div class="container-fluid">
                        
                        
                        <div className="row">
                            <div className="col-6">
                            
                                <p className="btn btn-light active" autocomplete="off" checked="checked"
                                style={{float:"left", fontStyle:"italic", fontWeight:"bold"}}>Artist</p>
                            </div>
                            <div className="col-6">
                                <p  className="btn btn-light" autocomplete="off" onClick={this.following}style={{float:"right",fontStyle:"italic", fontWeight:"bold"}}>Following</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"> 
                                {img_cont}
                            </div>
                        </div>
                    </div>
                </div>

            )
            }




        if( this.state.following == "nowFollowing"){
            
           
           
            for(var i=0;i<this.state.artistsList.length; i++){
               if( this.state.artistsList[i].following=="yes"){
                
                    img_cont.push(
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">                         
                                <img key={i} src={this.state.artistsList[i].photo}className="img-responsive" style={{borderRadius: "50%",width:"150PX"}}/>
                                    <button onClick={this.followButton} className="badge badge-primary badge-pill" id={this.state.artistsList[i].objid} 
                                     value={this.state.artistsList[i].following == 'yes' ? 'following' :'follow'} onClick={this.followButton}>
                                     {this.state.artistsList[i].following == 'yes' ? 'following' :'follow'}
                                    
                                    </button>
                            </li> 
                        </ul>
                    )
               }
              }
            

            return(  
                <div>
                       <Header mode='People'/>
                    <div class="container-fluid">
                        
                             
                           
                        <div className="row">
                            <div className="col-6">
                                <p className="btn btn-light" autocomplete="off" onClick={this.artistButton} style={{float:"left", fontStyle:"italic", fontWeight:"bold"}}>Artist</p>
                            </div>
                            <div className="col-6">
                                <p  className="btn btn-light active" autocomplete="off" checked="checked" onClick={this.following}style={{float:"right",fontStyle:"italic", fontWeight:"bold"}}>Following</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"> 
                                {img_cont}
                            </div>
                        </div>
                    </div>
                </div>

                        
                       
                    
                    )       
        



            
        }
    }
}
export default People