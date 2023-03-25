import React, {useState} from 'react';
const Notification = (props) =>{
return(
    <div style={{color: props.color}} >
    {props.msg}
    </div>
 )
}
export default Notification