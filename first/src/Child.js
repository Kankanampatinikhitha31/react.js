import React from 'react';
import "./child.css";
export function Child(props) {
  return (
    <div className='mainContainer'>
        <div >

        <p>{props.ad}</p>
        <p>{props.imageName}</p>

        </div>
    

        <div>   

        <p>{props.ad2}</p>
        <p>{props.imageName2}</p>

        </div> 

    </div>
  )
}
