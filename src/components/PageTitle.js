import './PageTitle.css'
const PageTitle=(props)=>{
    return(
        <div className="row text-center justify-content-center text-capitalize top-margin-open mb-5">
        <div className="col-11 font-open">
            {props.title}
        </div>
    </div>
    )
}
export default PageTitle;