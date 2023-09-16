import React from "react";

function ChildApp (data){
    return(
        <div>
            <h2>Çocuk Bileşen</h2>
            <h4>{JSON.stringify(data,null,2)}</h4>
        </div>
    )


}

export default  ChildApp;