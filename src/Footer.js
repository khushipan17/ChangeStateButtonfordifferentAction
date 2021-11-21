import {React} from 'react';

 export function Footer(){

    console.log("This is footer component");
    const hstyle = {
        color : "blue",
        border : "2px solid red", 
        width : "100%"
        
        }
        
        return(
        
            <div> 
                <h1 style = {hstyle}>  This is a Footer Compenent </h1>
            </div>
        )
        


}
