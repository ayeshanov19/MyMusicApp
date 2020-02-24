// import { Properties } from '../constants/Properties'
// import { Constants } from '../constants/Constants'
import React from 'react' 
import {Properties} from '../Properties'


class RegisterService {

    static async registeruser(dataObj){
        try {
            console.log("inside service")
            var jsonString = JSON.stringify(dataObj);
            const response = await fetch(Properties.SERVER_URL + '/user/registerUser', {
                method: 'POST',
                mode: "cors",
                cache: "no-cache",
                credentials: 'include',
                headers: {  
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'                    
                },
                 body: new URLSearchParams({"jsondata" : jsonString})
            });
            if(response && response.url == Properties.SERVER_URL + '/user/registerUser'){
                console.log('response',response)
                return response;

            } 
            // else if(response && response.url == Properties.SERVER_URL + '/login'){
            //     throw Constants.ERROR_REDIRECT_TO_LOGIN;
            // }
            return null;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }





    // static async fetchuser(){

    //     try {
    //         console.log("inside service")
    //        // var jsonString = JSON.stringify(dataObj2);
    //         const response = await fetch(Properties.SERVER_URL + '/user/getUser', {
    //             method: 'POST',
    //             mode: "cors",
    //             cache: "no-cache",
    //             credentials: 'include',
    //             headers: {  
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/x-www-form-urlencoded'                    
    //             }
    //           //  , body: new URLSearchParams({"jsondata" : jsonString})
    //         });
    //         if(response && response.url == Properties.SERVER_URL + '/user/getUser'){
    //             console.log('response',response)
    //             return response;

    //         } 
    //         // else if(response && response.url == Properties.SERVER_URL + '/login'){
    //         //     throw Constants.ERROR_REDIRECT_TO_LOGIN;
    //         // }
    //         return null;
    //     } catch (err) {
    //         console.log(err);
    //         throw err;
    //     }
    // }






   
    
}

export default RegisterService;