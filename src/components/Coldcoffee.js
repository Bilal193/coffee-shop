import './Coldcoffee.css'
import Titleandbtn from './cofees/Titleandbtn'
import Cup, {Text,TextCold } from './cofees/Cupandtext'


const Coldcoffee = (props) => {
    const classes = 'container-fluid ' + props.className;
    console.log(classes);
    return (

        <div className={classes}>
            <div className="row"> 
                <div className="col-xl-8 m-top-img">
                    <div className="row center-col">
                        <TextCold text={props.text}/>
                        <Cup pic={props.pic} />
                    </div>
                </div>
                <Titleandbtn name={props.name} /> 
            </div>
            <div className="row spacer-2">

            </div>
        </div>
    )
}
export default Coldcoffee;