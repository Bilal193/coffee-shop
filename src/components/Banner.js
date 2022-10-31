import Button from "./Button";
import React,{useState,useRef,useEffect} from "react";
import './Header.css'
const Banner = () => {
//    const [width,updateWidth]=useState(window.innerWidth)
   
// const detectChange=()=>{
//     updateWidth(window.innerWidth)}
//     useEffect(()=>{
//         window.addEventListener('resize',detectChange)
//         return()=>window.removeEventListener('resize',detectChange)

//     },[width])

  


//     let buttonDiv=useRef();
//     const screenWidth=()=>{
//         if(width<370)
//         {
//             buttonDiv.current.classList.add('d-flex')
//         }
        // else if(buttonDiv.current.classList.contains('d-flex')){
        //     console.log('b')
            
        // }
        // // else{
        // //     console.log(buttonDiv.current.classList.contains('d-flex'))
        // // }
      
    //}
    // screenWidth();
    // console.log(buttonDiv.current.classList.contains('d-flex'))

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