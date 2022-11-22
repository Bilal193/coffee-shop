import './Titleandbtn.css'
import Button from '../Button';
import React from 'react';

const Titleandbtn = (props)=>{
    return (
        <div className="col-xl-4 m-top-title ps-5 remove-ps">
            <div className="row">
                <div className="col-11">
                    <h1 className='darkcoffee xxs-center mb-5'>
                        {props.name}
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 dxxs-flex justify-content-center">
                    <Button/>
                </div>
            </div>

        </div>
    )
}
export default Titleandbtn;