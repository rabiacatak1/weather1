import React from "react";

function ChildComponent (props){
    const products=props.products;
    return(
        <div>
            <h2>Çocuk Bileşen</h2>
            <h4>{products}</h4>
        </div>
    )


}

export default  ChildComponent;