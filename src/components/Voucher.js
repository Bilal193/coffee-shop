import './Voucher.css'


const Voucher = () => {
    return (
        <div>
            <hr className="ruler" />
            <div className="voucher-box">
                <div className="row row-height align-items-center">
                    <div className="col-sm-6">
                        <div className="circle">
                            <img className='logo-image' src={require('./images/Logo.png')} alt="" />
                            <div className="text">
                                FREE
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-11 text-center text-capitalize headline-font "><b> gift voucher</b></div>
                            <div className="col-sm-6 col-8 text-center voucher-value text-capitalize mb-3 p-1"> 1 cup of coffee</div>
                            <div className="col-sm-11 col-10 text-justify voucher-terms "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur necessitatibus debitis exercitationem, corrupti veritatis nisi rerum optio voluptatum eum nemo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, expedita?</div>




                        </div>

                    </div>


                </div>
                <div className="leaf container">
                    <img className='img-fluid img-leaf' src={require('./images/leafimage.png')} alt="" />

                </div>
            </div>
            <hr className='ruler' />
        </div>
    )
}



export default Voucher