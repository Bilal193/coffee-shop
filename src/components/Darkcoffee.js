import './Body.css'
import Button from './Button';


const Darkcoffee = () => {
    return (

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
                            <Button />
                        </div>
                    </div>

                </div>
                <div className="col-8 m-top-img">
                    <div className="row ">
                        <div className="col-6">
                            <img src={require('./images/darkcofeecup.png')} className="" alt="" />
                        </div>
                        <div className="col-6 text-white text-end m-top-text">
                            <div className="text-wrap"></div>


                            <p className='pe-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum blanditiis, dolorum praesentium natus cum nesciunt ad ipsum esse ab culpa quae ipsa sed possimus iure eaque unde explicabo consectetur necessitatibus animi omnis, alias totam. Commodi, quia ducimus amet quasi officiis saepe at dicta nobis aut iusto modi corporis sit quae. Odio blanditiis error explicabo voluptas, officia quidem incidunt eius natus eveniet nobis. Voluptatum repudiandae labore sapiente obcaecati ut velit alias vitae facere? Soluta maxime dolores quidem aspernatur repellat. Nam cupiditate quisquam magni earum explicabo a iste nisi aliquid inventore, adipisci, culpa tempore maxime suscipit, modi ratione. Quisquam totam vero itaque.</p>

                        </div>


                    </div>



                </div>
                {/* <div className="col-4 pe-5 ps-0 text-end text-white m-top-text circle-to-wrap ">
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam officiis ipsa assumenda quia libero facere amet dolor, autem ipsam quam? Labore voluptas vel ex tempora, non molestiae magni inventore ad eius nihil vero quod, nobis quam suscipit reprehenderit consequatur. Enim, ad. Dolorem in ipsa, sequi nihil asperiores illo harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod, dolore delectus id libero excepturi neque repudiandae temporibus aliquid voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A neque incidunt nam hic accusamus. Nulla a consequatur doloribus quo officiis?</p>
            </div> */}
            </div>
            <div className="row spacer-2">

            </div>
        </div>
    )
}
export default Darkcoffee;