import React, {useContext} from 'react';
import {Context} from '../contexts/Context';
import View from './View';

// Importing the Login & Register Componet
import Login from './Login';



function Home(){
    const {rootState} = useContext(Context);
    const {isAuth} = rootState;
   
          


    // If user Logged in
   
    if(isAuth)
    {
        
            return(
           
        <div className="userinfo">
        
              <View/>
            </div>
            );
       
    }
    // Showing Login Or Register Page According to the condition
   
    else{
        return <Login/>;
    }
    
}

export default Home;