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
var favSong;

var clicked;
var clicked;

function Playlist(props){
var albumData = props.location.aboutProps;
console.log('PLAYLIST PROPS',props.location.aboutProps);

var onealbum=albumData['album'];
console.log('PLAYLIST onealbum',onealbum)
var listItems = [];
var songList = onealbum['songs'];
const [newvalue, setValue] = useState(0);
const [icon, setIcon] = useState(0);
const myHandler = (e) => 
{
   console.log("element",+e);
  
    e.stopPropagation();
    
    const newValue = 'true';
    setValue(newValue);
    console.log('state',newValue)
      if(newValue=='true')
      {
          

        document.getElementById('foo').style.display='block'
       document.getElementById('foo').style.textAlign="centre"
   // document.getElementById('foo').style.marginLeft="50%"
    //document.getElementById('foo').style.marginRight="-90%"
        document.getElementById('foo').style.animation="0.8s bounceInLeft"
      setTimeout(function () {document.getElementById('foo').style.display='none'}, 1900)


      }
     console.log('id = ', e.target.id)
      favSong=e.target.id
      console.log('index no',favSong)
      

      if(getGlobal().favourite){
         var hello = getGlobal().favourite;
         hello.push(songList[favSong])
         setGlobal({favourite:hello});
         console.log(getGlobal().favourite)
      }
      else{
         
         setGlobal({favourite:[]});
         var hello = getGlobal().favourite;

         
         
         hello.push(songList[favSong])
         setGlobal({favourite:hello});
         console.log(getGlobal().favourite)

      }

   }

   for(var i=0;i<songList.length ;i++){
      
      listItems.push(
         <div >
            <li  key={i} id={i}  className="list-group-item  "  onClick={(e)=>{  clicked= e.target.id ; props.location.aboutProps.getDataFrmChildImg(songList,clicked) } }>
               
               {songList[i].text} 
               {/* <span id={1} onClick={myHandler}>
               
                  <FontAwesomeIcon icon={ faHeart } 
                   style={{float:"right",display:"block"}} />
                </span> */}
                {/* <p id={i}
               onClick={myHandler}>yooo</p> */}
               <img src="https://img.icons8.com/material/24/000000/like--v1.png" id={i}
               onClick={myHandler}  style={{float:"right",display:"block", height: "37px",
               width: "37px"}}   />  
            
            {/* <button id={i}   >click</button> */}
            
         {/* <FontAwesomeIcon  onClick={myHandler} style={{float:"right"}}icon={ faHeart}/> > */}
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

export default Playlist