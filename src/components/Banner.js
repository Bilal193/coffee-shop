import Button from "./Button";
import React from "react";
import './Header.css'
const Banner = () => {

    return (
        <div className="row remove-margin">
            <div className="col-lg-6">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <h1 className="title-coffee xxs-center">Coffee</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11">
                        <p className="text-capitalize headline xxs-center">Everthing you love about coffee</p>
                    </div>
                </div>
                <div className="row mb-2 ms-4">
                    <div className="col-sm-9">
                        <p className="description xxs-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus deserunt quos repellendus adipisci vero culpa.</p>
                    </div>
                </div>



                <div className="row justify-content-center">
                    <div className="col-11 dxxs-flex justify-content-center">
                        <Button />
                    </div>
                </div>

                <div className="row spacer">

                </div>
            </div>
        </div>

    )
}
export default Banner;