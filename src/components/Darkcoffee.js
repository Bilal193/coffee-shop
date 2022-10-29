import './Body.css'
import Button from './Button';


const Darkcoffee=()=>{
    return(
       
       <div className="container-fluid drak-coffee-backgroundimg">
        <div className="row">
            <div className="col-4 m-top-title ps-5">
                <div className="row">
                    <div className="col-11">
                    <h1 className='darkcoffee mb-5'>
                    Dark Coffees
                </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Button/>
                    </div>
                </div>
                
            </div>
            <div className="col-4 m-top-img position-relative">
                <img src={require('./images/darkcofeecup.png')} className="d-block mx-auto position-relative z-circle" alt="" />
                <img src={require('./images/circular-pattren.png')} className="position-absolute top-50 start-50 translate-middle " alt="" />


            </div>
            <div className="col-4 pe-5 ps-0 text-end text-white m-top-text circle-to-wrap ">
                <div className='shaper'></div>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam officiis ipsa assumenda quia libero facere amet dolor, autem ipsam quam? Labore voluptas vel ex tempora, non molestiae magni inventore ad eius nihil vero quod, nobis quam suscipit reprehenderit consequatur. Enim, ad. Dolorem in ipsa, sequi nihil asperiores illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod, dolore delectus id libero excepturi neque repudiandae temporibus aliquid voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A neque incidunt nam hic accusamus. Nulla a consequatur doloribus quo officiis?</p>
            </div>
        </div>
        <div className="row spacer-2">

        </div>
       </div>
    )
}
export default Darkcoffee;