import React from "react";
import "./Cupandtext.css";

const Cup = (props) => {
    return (<div className="col-xl-6 d-flex">
        <img src={props.pic} className=" dark-cup" alt="" />
    </div>

    )
}
export const Text = (props) => {
    return (
    <div className="col-xl-6 col-10 text-white text-end remove-text-end m-top-text">
        <div className="text-wrap"></div>
        <p className='pe-4 remove-pe'>{props.text}</p>
    </div>
    )
}
export const TextCold = (props) => {
    return (
    <div className="col-xl-6 col-10 text-white text-start remove-text-end m-top-text">
        <p className='pe-4 remove-pe'>{props.text}</p>
        
    </div>
    )
}
export default Cup;