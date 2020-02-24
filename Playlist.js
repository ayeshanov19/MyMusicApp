import React,{useState} from 'react'
//import ListSongs from './ListSongs';
import ImageComp from './ImageComp';
import App from './App'
import Front from './Front'
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom"
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {Properties} from './Properties'
import SideNav from './SideNav';
import Favourites from './Favourites';
import  { setGlobal } from 'reactn';
import  { getGlobal } from 'reactn';

var clicked;

class  Playlist extends React.Component{
    constructor(props){
      super(props)
     // this.myHandler=this.myHandler.bind(this);
      
      this.state={artistSongs:this.props.songs}
      console.log("from image",this.props)
    }
    
 //this.state.artistSongs
//   myHandler = (e) => {
//     var onealbum=this.state.albumData['album'];
//     var songList = onealbum['songs'];
//     console.log("element",+e);
//     e.stopPropagation();
//     this.setState({newValue:"true"},()=>{
//     if(this.state.newValue=='true'){
//        document.getElementById('foo').style.display='block'
//        document.getElementById('foo').style.textAlign="centre"
//        document.getElementById('foo').style.animation="0.8s bounceInLeft"
//        setTimeout(function () {document.getElementById('foo').style.display='none'}, 1900)
//      }});


//     console.log('id = ', e.target.id)
//     favSong=e.target.id
//     console.log('index no',favSong)
      

//     if(getGlobal().favourite){
//          var hello = getGlobal().favourite;
//          hello.push(songList[favSong])
//          setGlobal({favourite:hello});
//          console.log(getGlobal().favourite)
//     }
//     else{
         
//          setGlobal({favourite:[]});
//          var hello = getGlobal().favourite;
//          hello.push(songList[favSong])
//          setGlobal({favourite:hello});
//          console.log(getGlobal().favourite)

//     }


// }

render(){

  console.log("props", this.props)
console.log("heyyy")
         
        //  for(var i=0; i<this.state.artistSongs.length; i++)
        //  {
        //  var onealbum=this.state.artistSongs[i];
        //   var onealbum2=onealbum['albums'];
        //   var songList=onealbum2['songs'];
        //  //console.log("props", onealbum3)
        //  }
         var onealbum=this.state.artistSongs;
         var listItems = [];
         var songList = this.state.artistSongs['songs'];
        for(var i=0;i<songList.length ;i++){
      
           listItems.push(
             <div >
                <li  key={i} id={i}  className="list-group-item  "  onClick={(e)=>{  clicked= e.target.id ; this.props.sendatatoplayer(songList,clicked) } }>
                 {songList[i].text} 
                    <img src="https://img.icons8.com/material/24/000000/like--v1.png" id={i}
                    onClick={this.myHandler}  style={{float:"right",display:"block", height: "37px",
                    width: "37px"}} />  
               </li>  
            </div>   
            )
         }
  
      

return(

<>
<Header mode= 'albumname'  album={onealbum}/>
 <div className="container">
        <div className="row"style={{width:"100%"}} >
           <div className="col-1">
           </div>
           <div className="col-10">
            <img src ={onealbum.coverphoto}   style={{  height: "230px" ,   width: "100%", 
             }} />
           </div>
           <div className="col-1">
          </div>
        </div>
</div>


<div className="container">
     <div className="row"style={{width:"100%"}} >
        <div className="col-1">
        </div>
        <div className="col-10">
             <ul  class="list-group">
             {listItems}
             </ul>
        </div>
        <div className="col-1"></div> 
        </div>
</div>

<div className="container">
    <div className="row">
        <div className="col-1"></div>
        <div  className="col-10 " style={{display:"none"}}id="foo">
           <centre><p>Added to Favourites</p></centre>
       </div>
       <div className="col-1">
      </div> 
    </div>
</div>
</>

)
}
}

export default Playlist