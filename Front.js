import React from 'react'
import img1 from './images/images (7).jpeg'
import img2 from './images/images (8).jpeg'
import img3 from './images/images (7).jpeg'
import img4 from './images/images (7).jpeg'
import img5 from './images/images (7).jpeg'
import pic1  from './images/saathip.jpeg'
import song1 from './images/03 Lo Safar - Baaghi 2 (SongsMp3.Com).mp3'
import song2 from './images/05 Soniye Dil Nayi - Baaghi 2 (SongsMp3.Com).mp3'
import pic2 from  './images/5-The-Chainsmokers.w1200.h630.jpg'
import  pic3 from './images/call me.jpg'
import song3 from './images/i really like.mp3'
import song4 from './images/call me.mp3'
import pic4 from './images/closer.jpeg'
import pic5 from './images/i really like you.jpg'
import pic6 from './images/lo safar.jpeg'
import pic7 from './images/paris.jpeg'
import pic8 from './images/soniye.jpeg'
import pic9 from './images/5-The-Chainsmokers.w1200.h630.jpg'
//import './container.css'
import pic10 from'./images/runp.jpg'
import Player from './Player'
import dont from './images/dont_let_me_down.mp3'
import saathi from './images/saathi.mp3'
import run from './images/run.mp3'
import pic from './images/5-The-Chainsmokers.w1200.h630.jpg'
import saathip from './images/saathip.jpeg'
import runp from './images/runp.jpg'
//import dont from './images/dont_let_me_down.mp3'
import ImageComp from './ImageComp';
//import ListSongs from './ListSongs';
import song5 from './images/The Chainsmokers - Paris - MP3 320.mp3'
import song6 from './images/The Chainsmokers - Closer (Lyric) ft. Halsey.mp3'
import RegisterService from './Services/Register'
import SongsService from './Services/SongsService'
import {Properties} from './Properties'



var img={
  width:"100px"
}


class Front extends React.Component{
  constructor(props){
  console.log("PROPS OF FRONT",props )
  super(props)  
  this.callSongService = this.callSongService.bind(this);
  this.state={listofalbums:''}
  }


componentDidMount()
{
console.log("yooo");
  this.callSongService();
  
}


async callSongService()
{
const response = await  SongsService.getsongs()
   const retdata = await response.json();
  
   console.log("ret dta",retdata)


// var songslist=[];
// var albumlist =[];
// var albums = {};
// var albumGot;
// var coverphotoGot;
// var unstrObj= retdata.result;
// for(var i=0;i<unstrObj.length;i++){
//    var album = unstrObj[i].albumname;
//    var coverphoto = unstrObj[i].coverphoto
//    if(!albumGot){
//      albumGot = album;
//      coverphotoGot = coverphoto;
//    }
//    if(albumGot === album){
//      songslist.push({song:unstrObj[i].source, artist:unstrObj[i].image,text:unstrObj[i].songname })
//    }
//    if(albumGot != album || i==(unstrObj.length-1)){
//      albumlist.push({coverphoto: coverphotoGot , albumName:albumGot,songs:songslist});
//      songslist = new Array();
//      albumGot = album;
//      coverphotoGot = coverphoto;
//    }
// }


var albumlist =[];
var albums = [];

var unstrObj= retdata.result;
for(var i=0;i<unstrObj.length;i++){
   if(!albums.includes(unstrObj[i].albumname)){
      albums.push(unstrObj[i].albumname);
      albumlist.push({albumName:unstrObj[i].albumname,coverphoto:unstrObj[i].coverphoto})
   }
   if(albums.includes(unstrObj[i].albumname)){
      if(!albumlist[albums.length-1].songs){
        albumlist[albums.length-1]['songs'] = new Array();
        albumlist[albums.length-1].songs.push({song:unstrObj[i].source, artist:unstrObj[i].image,text:unstrObj[i].songname })
      }else{
        albumlist[albums.length-1].songs.push({song:unstrObj[i].source, artist:unstrObj[i].image,text:unstrObj[i].songname });
      }
   }
}



// this.state.listofalbums=albumlist;
this.setState(
  {
listofalbums:albumlist

  }
)
}



render(){

console.log("FRONTTTTTT",this.state.listofalbums)

  

  return(

    <div className="container-fluid">
    <div className="row" >
    
   
              <div className="col-12">
              
        <img src={img1} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img2} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img3} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img4} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img1} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img2} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img3} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img4} style={img}className="img-thumbnail" alt="Responsive image"></img>
        <img src={img1} style={img}className="img-thumbnail" alt="Responsive image"></img>
    </div>
    {/* <div className="col-2">
    </div> */}
</div>


   
        {/* <ImageComp playlist={[pic1,pic2,pic3,pic4,pic1,pic2,pic3,pic4,pic1,pic4,pic3,pic2,pic1,pic2]}>
        </ImageComp> */}





              <div className="row" >
              {/* <div className="col-2"></div> */}
              <div className="col-12">
              <ImageComp 
              albumList={this.state.listofalbums}
              getDataFrmChildFront = {this.props.getDataFrmChild}   />

              </div>
              {/* <div className="col-2"></div> */}

              </div>

    


    <div>
      
    </div>

    </div>



   
)

}
}
export default Front















// albumList={[
//   {
//   coverphoto: saathip,
//   albumName :'baaghi',
//   songs:[

// {
//   song:  song1,
//   artist: pic6,
//   text:"Lo Safar"
// },
// {
//   song:  saathi,
//   artist: saathip,
//   text:"Oo saathi"
// },
// {
//   song:  song2,
//   artist: pic8,
//   text:"Soniye"
// }

//   ]
// },

// {

//   coverphoto: pic,
//   albumName :'chainsmokers',
//   songs:[

// {
//   song:  dont,
//   artist: pic,
//   text:"dont lem"
// },
// {
//   song:  song5,
//   artist: pic7,
//   text:"Paris"
// },

// {
//   song:  song6,
//   artist: pic4,
//   text:"Closer"
// }


//   ]

// },


// {

//   coverphoto: runp,
//   albumName :'carly rae ',
//   songs:[

// {
//   song:  song4,
//   artist: pic3,
//   text:"Call me maybe"
// },
// {
//   song:  song3,
//   artist:pic5,
//   text:"I really "
// },

// {
//   song:  run,
//   artist: runp,
//   text:"run away"
// }


//   ]
// }

// ] }