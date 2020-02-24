import React from 'react'
import Header from './Header'
import Playlist from './Playlist'
import  { setGlobal } from 'reactn';
import  { getGlobal } from 'reactn';

class Favourites extends React.Component{


   
constructor(props)
{

    super(props)


}


listFav = (e) =>
{
 console.log('clicked', e.target.id);
 setGlobal({ favClicked:e.target.id})
//  setGlobal({ favSongs:this.props.location.myProps['myFavii']})

getGlobal().playerState(this.props.location.myProps['myFavii'], e.target.id);
// getGlobal().nextPlay(this.props.location.myProps['myFavii'], e.target.id);
 

}

render()
{
   
      //  getGlobal().playerState(this.props.location.myProps['myFavii'], favClicked);

      var myFavourite=this.props.location.myProps['myFavii']
      console.log('fav props',this.props.location.myProps['myFavii'])
      var images=[];
      var listItems=[];
      
      console.log('want',myFavourite)
      
      for(var i=0;i<myFavourite.length ;i++){
      listItems.push(
        <li  key={i} id={i} className="list-group-item  " 
         onClick={this.listFav}>

      {/* //   onClick={(e)=>{ setGlobal({ favClicked:e.target.id});
      //   setGlobal({ favSongs:myFavourite}) */}
    
        
         
        
        {this.props.location.myProps['myFavii'][i].text}
        </li>
                  
              
                   )
      }
      console.log('gggg',getGlobal().favClicked)

      for(var i=0;i<myFavourite.length ;i++){
        images.push(
          <img key={i} src ={ this.props.location.myProps['myFavii'][i].artist} 
         >
          
          </img>
                    
                
                     )
        }
  
  


    return(


            <>

            <Header mode= 'favouriteSongs'  /> 
            <div className="container">
            <div className="col-1"></div>
            <div className="row"style={{width:"100%"}} >
            <div className="col-10">
            {images}
            </div>
            <div className="col-1"></div>

            </div>
            </div>
            <div className="container">

            <div className="row" style={{width:"100%"}} >
            <div className="col-1"></div>
            <div className="col-10">
            <ul  class="list-group">

            {listItems}
            </ul>

            </div>
            <div className="col-1"></div>
            </div>


            </div>

            </>

            )

            }
            }

export default Favourites