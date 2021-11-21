import {React} from 'react';

export function ChangeState(props){
console.log("Change State Rendered ");

const bstyle = {

   height : "50px",
   width : "100px",
   margin : "5px"
}

return (
    <div> 
        <button style = {bstyle} onClick = {props.click}> {props.caption}</button>
    </div>
)

}

