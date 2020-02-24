import React from 'react';
import './container.css'
import Playlist from './Playlist'
import {Link} from "react-router-dom"
import Front from './Front'
import {Properties} from './Properties'

class  ImageComp extends React.Component
{
    constructor(props)
    {
    
    super(props);   
    console.log('faisal2',this.props); 
    this.showAnothercomponent=this.showAnothercomponent.bind(this); 
    this.state={showComponent:'', myAlbum: props.albumList}
    console.log("PROPS of ImageComp",props.albumList)
    }


    showAnothercomponent(e){
        alert(e.target.id)
        var elem =  e.target.id;
        console.log('elem',elem);
        this.setState({showComponent:true,itemToRender:elem})
       }
    render()
    {
        //HERE DIDNT SET THE PROPS AS A STATE IN CONSTRUCTOR BECZ OF SOME ISSSUE INSTEAD DIRECTLY USED IN RENDER
       // console.log("myalbum",this.props)
    var img_cont =[];
    for (var i=0; i<this.props.albumList.length;i++){
        img_cont.push(
            // {album : props.albumList[i],
            //  getDataFrmChildImg :props.getDataFrmChildFront}
          
               
            
             <img key={i} id={i}
             src={this.props.albumList[i].coverphoto}
             onClick={this.showAnothercomponent}
                         
             className="img-thumbnail" 
             style={{height: "70%",'width': "24%"}}/>
             
        );

       console.log( "to send",this.props.itemToRender)

        if(this.state.showComponent){
                   
            //console.log("mydata",this.artistsList[0].albums[0])
           //console.log("hey", this.state.artistsList);
           //console.log("to be send",this.state.artistsList[i].albums);
           
           return(
           <Playlist
           songs={this.props.albumList[this.state.itemToRender]} sendatatoplayer={this.props.getDataFrmChildFront}></Playlist>
           
        )
        }


    }
    
    return (
        <div>
            <div className="row">
                <div  className="col-12" style={{height:"100%"}}>{img_cont}</div>
            </div>
        </div>
    )
}
    }
// submitHandler = (event) => {
//     // console.log(this.state);
//     // this.customers = this.state;
//     // console.log('customers',this.customers)
//     console.log('submit',this.state.isSubmitted)
//     this.setState({isSubmitted: true});
    
//     console.log('state',this.state.isSubmitted)
//     event.preventDefault();
//   }




export default ImageComp;