
import {React} from 'react';

export function DisplayFlag(props){

    console.log("Df Rendered");
    return(

        <div> <h1> Flag : {props.flag.toString()}</h1></div>
    )



}
