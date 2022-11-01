import './Timings.css'

const Timings=(props)=>{
    return(
        <div className="row justify-content-center text-center ff align-items-center fs-3 mb-5">
            <div className="col-lg-4 col-md-6 col-10 timing-box p-4 text-white">
            <p>
{props.day}
            </p>
            <p>
{props.time}
            </p>
            </div>
 
        </div>
    )
}
export default Timings;