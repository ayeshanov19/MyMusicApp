import React, { Component } from "react";
import LoginService from "./Services/LoginService";
import { async } from "q";


class MyLoginPage extends Component {
  state = [
    {
      userName: "",
   
    pass: "",
    isLogged: ""
    }
  ];

  customers;

  userChange = (event) => {
    this.setState({userName: event.target.value});
  };

 

 passChange = (event) => {
    this.setState({ pass: event.target.value });
  };

   async submitHandler (event) {
    console.log(this.state);
    this.customers = this.state;
    console.log('customers',this.customers)
    event.preventDefault();
    var data={name:this.state.userName, password: this.state.pass}
    const response= await LoginService.loginuser(data);
    const retdata= await response.json();
    console.log("login data" + retdata);
    this.setState(
      {
        isLogged:"true"
      }
    )

  };


  
  render() {
    return (
      <>
         
         
         <div className="container" style={{backgroundColor:"#008B8B"}}>
  
         <form  onSubmit={this.submitHandler} style={{width:"108%",marginTop:"60%", height:"899px"}}>
     
         <div class="form-group">
         <label for="exampleInputPassword1">Name</label>
         <input type="text" value={this.state.userName}  onChange={this.userChange} class="form-control" placeholder="Enter Name"/>
       </div>
     
     
       <div class="form-group">
         <label for="exampleInputPassword1">Password</label>
         <input type="password"  value={this.state.pass}   onChange={this.passChange}  class="form-control" id="exampleInputPassword1" placeholder="Password"/>
       </div>
      
       <button className="btn btn-success"  type="submit">Login</button> 
     </form>
     </div>
         </>







    );
  }
}

export default MyLoginPage
