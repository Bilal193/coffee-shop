import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className="page-title text-capitalize text-center fs-1 mb-5">
                customer reviews
            </div>
            <div className="container bgc">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-center">
                        <img className='m-5 img-width' src={require('./images/girlwithcup.png')} width='400px'  alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row text-center text-white col-center">
                            <div className="col-10 text-capitalize font-size mb-4 mt-5">haryy brook</div>
                            <div className="col-10 fd mb-5 pb-4 text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas voluptate dolorem porro beatae expedita in et, cupiditate reiciendis qui quam totam nihil nesciunt voluptatem nostrum blanditiis voluptatibus aspernatur quos alias quasi eum quidem adipisci? Omnis modi repellat dolorem inventore..</div>
                            <div className="col-10 text-capitalize font-size mb-4">morris john</div>
                            <div className="col-10 fd mb-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptatibus nesciunt perferendis dolores at distinctio dicta sit assumenda necessitatibus aut aliquam sapiente quisquam, tenetur expedita modi suscipit, libero ea? Alias voluptatibus placeat libero quod.</div>
                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}
export default Reviews;