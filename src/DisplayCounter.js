import {React} from 'react';

export function DisplayCounter(props){

    console.log("DC Rendered");
    return(

        <div> <h1> Counter : {props.counter}</h1></div>
    )



}

