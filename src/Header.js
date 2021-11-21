import React  from "react";

export function Header(){
console.log("this is a header component");
const hstyle = {
color : "blue",
border : "2px solid red", 
width : "100%"

}

return(

    <div> 
        <h1 style = {hstyle}>  This is a Header Compenent </h1>
    </div>
)

}

