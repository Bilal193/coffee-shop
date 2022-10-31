import './Darkcoffee.css'
import Button from './Button';


const Darkcoffee = () => {
    return (

        <div className="container-fluid drak-coffee-backgroundimg">
            <div className="row">
                <div className="col-xl-4 m-top-title ps-5 remove-ps">
                    <div className="row">
                        <div className="col-11">
                            <h1 className='darkcoffee xxs-center mb-5'>
                                Dark Coffees
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 dxxs-flex justify-content-center">
                            <Button />
                        </div>
                    </div>

                </div>
                <div className="col-xl-8 m-top-img">
                    <div className="row center-col">
                        <div className="col-xl-6 d-flex">
                            <img src={require('./images/darkcofeecup.png')} className=" dark-cup" alt="" />
                        </div>
                        <div className="col-xl-6 col-10 text-white text-end remove-text-end m-top-text">
                            <div className="text-wrap"></div>


                            <p className='pe-4 remove-pe'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum blanditiis, dolorum praesentium natus cum nesciunt ad ipsum esse ab culpa quae ipsa sed possimus iure eaque unde explicabo consectetur necessitatibus animi omnis, alias totam. Commodi, quia ducimus amet quasi officiis saepe at dicta nobis aut iusto modi corporis sit quae. Odio blanditiis error explicabo voluptas, officia quidem incidunt eius natus eveniet nobis. Voluptatum repudiandae labore sapiente obcaecati ut velit alias vitae facere? Soluta maxime dolores quidem aspernatur repellat. Nam cupiditate quisquam magni earum explicabo a iste nisi aliquid inventore, adipisci, culpa tempore maxime suscipit, modi ratione. Quisquam totam vero itaque.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row spacer-2">

            </div>
        </div>
    )
}
export default Darkcoffee;