import './Footer.css'

const Footer = () => {
    return (
        <div class="container-fluid bgc mt-5 pt-5">
            <footer class="row">
                <div class="col mb-3">
                    <a href="#" class="d-flex align-items-center ms-5 mb-3 text-decoration-none">
                       <img src={require('./images/Logo.png')} height='60px'  alt="" />
                       <p className='logo-font mt-4 ms-2'>Coffee Cup</p>
                    </a>
                    
                </div>

                <div class="col mb-3">

                </div>

                <div class="col mb-3">
                    
                </div>

                <div class="col mb-3">
                    <h5 className='fs-2'>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>

                <div class="col mb-3">
                <h5 className='fs-2'>Quick Links</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Support</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Location</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Branches</a></li>
                        
                    </ul>
                </div>
            </footer>
           
        </div>
    )
}
export default Footer;