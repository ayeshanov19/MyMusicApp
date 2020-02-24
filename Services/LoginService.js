import React from 'react' 
import {Properties} from '../Properties'
import $ from 'jquery'; 

class LoginService {

    static async doLogin(mydata){
        try {
            console.log("inside login service")
            const serviceURL = Properties.SERVER_URL + '/processLogin';
            var response = $.ajax ({
                url: serviceURL,
                data: mydata,
                async: false,
                cache: false,
                crossDomain: true,
                method: 'POST',
                xhrFields: {
                    withCredentials: true
                }
            });
            console.log(response);            
            return response;            
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}
export default LoginService ;