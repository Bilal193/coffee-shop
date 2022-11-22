import React from 'react';
import './Darkcoffee.css'
import Titleandbtn from './cofees/Titleandbtn';
import Cup, { Text } from './cofees/Cupandtext'


const Darkcoffee = (props) => {
    const classes = 'container-fluid ' + props.className;
    
    return (

        <div className={classes}>
            <div className="row">
                <Titleandbtn name={props.name} />
                <div className="col-xl-8 m-top-img">
                    <div className="row center-col">
                        <Cup pic={props.pic} />
                        <Text text={props.text} />
                    </div>
                </div>
            </div>
            <div className="row spacer-2">

            </div>
        </div>
    )
}
export default Darkcoffee;