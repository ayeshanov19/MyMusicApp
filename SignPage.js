import  React from 'react'
import sunp from './images/sun.jpg'
import './Sign.css'
import  { Redirect } from 'react-router-dom';
import pic from './images/Free_Sample_By_Wix.jpeg'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import SignUpUser from './SignUpUser'
import {Properties} from './Properties'
import MyLoginPage from './MyLoginPage'
import RegisterService from './Services/Register'
import SongsService from './Services/SongsService'
import LoginService from './Services/LoginService';
import {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory
  } from 'history';
  import { withRouter } from 'react-router-dom';
// var back={
//      height: "100%", 
    
//     /* Center and scale the image nicely */
//     Position: "center",
//     backgroundRepeat: "norepeat",
//     backgroundSize: "cover"   
// };
var but={
    width:"70%",
    //height:"155%"
}




class SignPage extends React.Component 
{


    constructor()
    { console.log('signpage')
        super()
        this.redirected= true;
        this.state={ curpath: '' ,isLoggedin:'false', signUp :'false',
        userName: "", email: " ",
         pass: "",RedirectToHome:'',
         isSignedUp:""
    
         }
        this.form={};
        this.signUp=this.signUp.bind(this);
        this.loginUser=this.loginUser.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    


    userChange = (event) => {
        this.setState({userName: event.target.value});
      };
    
      handleInputChange(event) {
        this.form[event.target.name] = event.target.value;
    }
    emailChange = (event) => {
    this.setState({ email: event.target.value });
    };
    
    passChange = (event) => {
        this.setState({ pass: event.target.value });
      };
    
     register(event){
      this.submitHandler(event);
    }

  

        submitHandler (event) {
          event.preventDefault();
          this.doLogin(this.form);
          // var x = document.forms["myForm"]["fname"].value;
          // if (x == "") {
          //   alert("Name must be filled out");
          //   return false;
          // }
          // event.preventDefault();
          // var data={name: this.state.userName, email: this.state.email, password:this.state.pass}
          //   const response = await  RegisterService.registeruser(data)
          //   const retdata = await response.json();
          //   console.log("ret dta",retdata)
          //  this.setState({isSignedUp:'home'});
        }

      async doLogin(form) {
        try {
            console.log('form',form);
            const response = await LoginService.doLogin(form);
            if (response && !response.includes('The username or password is incorrect')) {
             //   this.showLoading(false);
             console.log('The username or password is incorrect');
              //  LoginService.setupLogin(form);
                this.setState({isSignedUp:'home'});
           
            } else {
                //  this.showLoading(false);
              
                    this.setState({ errorStatus: true, errormessage: "Incorrect Username or Password." });
                    
            }
           // this.showLoading(false);
        } catch (err) {
            if(this.redirected){
                console.log("redirected by server, ignoring and trying again!");
                this.doLogin(form);
                this.redirected = false;
            } else {
               // this.showLoading(false);
                console.log(err);
               // this.showLoading(false);
                this.setState({ errorStatus: true, errormessage: "Error: Server Not Reachable: Please check Network Connectivity and Try Again!" }); 
            }
        }
    }

          
    signUp()
    {
    this.setState({signUp: 'mysignup'});
    console.log(this.state.curpath)
    }

    loginUser()

    {
    this.setState({isLoggedin: 'true'});
    console.log(this.state.isLoggedin)
    }


    render()
    {
        if(this.state.isSignedUp == 'home'){
            return( <Redirect to={ Properties.AUTHENTICATED_URL + "/header"}/>);
        }

        if(this.state.isLoggedin == 'home'){
          return( <Redirect to={ Properties.AUTHENTICATED_URL + "/header"}/>);
      }
        if(this.state.isLoggedin == 'true')
        {    
            
         
         return (
         <>
          
         <div className="bg">
  
         <form name="loginform" style={{margin: " auto", width:"250px"}} onSubmit={this.submitHandler}   >
        
         <div className="form-group"  >
         
         <label for="exampleInputPassword1" style={{fontWeight:"Bold",fontSize:"20px"}}>Name</label>
         
         <input type="text" name='username' onChange={this.handleInputChange} 
         className="form-control" placeholder="Enter Name"/>
      
       </div>
     
     
       <div className="form-group"  >
         <label for="exampleInputPassword1" style={{fontWeight:"Bold",fontSize:"20px"}} >Password</label>
         <centre>
         <input type="text"  name='password'  onChange={this.handleInputChange}  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
       
       </centre></div>
       <div id="error_messages" className="mb-2" style={{ display: (this.state.errorStatus) ? 'block' : 'none' }}>
            <span>{this.state.errormessage}</span>
        </div>
      
       <button className="btn btn-success" onClick={this.submitHandler} type="submit">Login</button> 
       </form>
       </div>
       {/* <Redirect to={ Properties.AUTHENTICATED_URL + "/home"} /> */}
       </>

              );
       }
if (this.state.signUp=='mysignup')
{
 return(
<>

<div className="bgsignup" >
  
         <form name="myForm" onSubmit={this.submitHandler} style={{width:"108%", height:"899px"}}>
     
         <div className="form-group">
         <label for="exampleInputPassword1">Name</label>
         <input name="fname" type="text" value={this.state.userName}  onChange={this.userChange} className="form-control" placeholder="Enter Name"/>
       </div>
     
     
     <div className="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input type="email"   value={this.state.email}  onChange={this.emailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div className="form-group">
         <label for="exampleInputPassword1">Password</label>
         <input type="password"  value={this.state.pass}   onChange={this.passChange}  className="form-control" placeholder="Password"/>
       </div>
       <div className="form-check">
         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
         <label className="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
       
       <button className="btn btn-primary" onClick={this.submitHandler} type="button">Submit</button> 
      
     </form>
    
     </div>
        
</>

 )
}


        else{
return(


 <>
<div className="container-fluid">
<div className="row">
<div className="col-12">

<center><img src={pic}/>
</center>
</div>
</div>
<div className="row" >
<div className="col-12">
<center style={{fontWeight:"bold", fontSize:"35px"}}> MUSIC FOR EVERY MOOD</center>
</div>
</div>
<br></br>
<br></br>
<div className="row" >
<div className="col-12">
<center>
<button type="button"  onClick ={this.signUp}  style={but}className="btn btn-primary btn-lg">SIGN UP</button>
</center>

</div>
</div>
<br>
</br>

<div className="row" >
<div className="col-12">
<center>
<button type="button" data-toggle="modal" data-target="#myModal" onClick ={this.loginUser} style={but}className="btn btn-success btn-lg">LOGIN</button>
</center>
</div>
</div>
</div>

 </>
)

}



}
}
export default withRouter(SignPage)