import React, { createContext,Component } from "react";
import axios from 'axios'
export const Context = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost/Trainee-Association-Assignment-master/',
});

class MyContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
        isAuth:false,
        theUser:null,
    }
    
  

 




    loginUser = async (user) => {

        // Sending the user Login request
        const login = await Axios.post('login.php',{
            email:user.email,
            password:user.password
        });
        return login.data;
    }

    // Checking user logged in or not
    isLoggedIn = async () => {
        const loginToken = localStorage.getItem('loginToken');

        // If inside the local-storage has the JWT token
        if(loginToken){

            //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            // Fetching the user information
            const {data} = await Axios.get('user-info.php');

            // If user information is successfully received
            if(data.success && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }
    

    render(){
        const contextValue = {
            rootState:this.state,
            
            isLoggedIn:this.isLoggedIn,
            loginUser:this.loginUser
            
        }
        return(
            <Context.Provider value={contextValue}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export default MyContextProvider;
