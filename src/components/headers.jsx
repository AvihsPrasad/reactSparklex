// import BrandLogo from '../assets/Images/BrandLogo.png' 
import BrandLogo from '../assets/Images/BrandLogo.png' 
function Header() {
    return (
        <>
        <header className='sticky-top' style={{backgroundColor: '#e3f2fd','z-index': '999999'}}>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                    <img src={BrandLogo} alt="Logo" className="d-inline-block align-text-top logo" />
                        {/* SPARKLEX */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ps-5">
                                <a className="nav-link active" aria-current="page" href={`/`}>Home</a>
                            </li>
                            <li className="nav-item ps-5 dropdown">
                                <a className="nav-link dropdown-toggle" href={`/comingsoon`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={`/comingsoon`}>Bhoomi</a></li>
                                </ul>
                            </li>
                            <li className="nav-item ps-5 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href={'/comingsoon'}>MyTechno</a></li>
                                    <li><a className="dropdown-item" href={'/comingsoon'}>Business Development plan</a></li>
                                </ul>
                            </li>
                            <li className="nav-item ps-5 dropdown">
                                <a className="nav-link dropdown-toggle" href={`/services`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                                </a>
                                <ul className="dropdown-menu redesign">
                                        <li>
                                            <a className="dropdown-item" href={'/It-Training'}>IT Training &amp; Placement</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/consulting'}>IT Strategy &amp; Consulting</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/Software-development'}>Software Development</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/Mobile-app-development'}>Mobile App Development</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/Infrastructure-management-service'}>Infrastructure Management Services</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/business'}>Business Analytics</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/Enterprise-resourcing'}>Enterprise Resourcing</a>
                                        </li>
										<li>
                                            <a className="dropdown-item" href={'/webDevelopment'}>Web Development</a>
                                        </li>
										<li>
                                            <a className="dropdown-item" href={'/UI-UX-design'}>UI/UX Design &amp; Development</a>
                                        </li>
										<li>
                                            <a className="dropdown-item" href={'/Cms'}>CMS Development</a>
                                        </li>
										<li>
                                            <a className="dropdown-item" href={'/branding'}>Branding</a>
                                        </li>
										<li>
                                            <a className="dropdown-item" href={'/cloud-Service'}>Cloud Services</a>
                                        </li>
                                    </ul>
                            </li>
                            <li className="nav-item ps-5 dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Training
                                </a>
                                <ul className="dropdown-menu redesign">
                                        <li>
                                            <a className="dropdown-item" href={'/java'}>Java Develpmenet</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/python'}>Python Development</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/web'}>Web Design & Development</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/mobile'}>Mobile Development</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/fullstack'}>Full Stack Development</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/digital'}>Digital Marketing</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={'/aws'}>AWS & Devops</a>
                                        </li>
										<li>
                                            <a className="dropdown-item" href={'/Selenium'}>Selenium</a>
                                        </li>
										<li>
                                            <a className="dropdown-item" href={'/splunk'}>Splunk</a>
                                        </li>
                                    </ul>
                            </li>
                            <li className="nav-item ps-5">
                                <a className="nav-link" href={`/about`}>About</a>
                                {/* <Link className="nav-link" to="about">About Us</Link> */}
                            </li>
                            <li className="nav-item ps-5">
                                <a className="nav-link" href={`/career`}>Careers</a>
                            </li>
                            <li className="nav-item ps-5">
                                <a className="nav-link" href={`/contact`}>Contact</a>
                            </li>
                            <li className="nav-item ps-5">
                                <button class="btn btn-primary" style={{background: '#808dad',border: 0}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <i class="fa-solid fa-phone"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
        <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-4">
                <div style={{'textAlign': 'center'}}>
                    <img src={BrandLogo} alt="Logo" className="d-inline-block align-text-top logo" style={{width: '60%'}} />
                </div>
                <div class="my-5">
                    <h2>Get In Touch</h2>
                    <p className="mt-3 fs-6">
                        Please fill out the form in <a href={'/contact'}> Contact Us</a>, if you want to work with us or need more details about Us.
                    </p>
                </div>
                <div className="my-4">
                    <p>We're Available 24/7. Call Now.</p>
                    <div><i class="fa-solid fa-phone"></i> <span>+1 (647) 877-2318</span></div>
                    <div><i class="fa-solid fa-phone"></i> <span>+1 (514) 217-2819</span></div>
                    {/* <div><i class="fa-brands fa-whatsapp"></i> <span>+1 (647) 968-3243</span></div> */}
                </div>
                <div className="my-4">
                    <p>Send Us an Email:</p>
                    <div><i class="fa-solid fa-envelope"></i> <span>info@sparklextechnologies.com</span></div>
                    {/* <div><i class="fa-solid fa-envelope"></i> <span>mentoring@ncplconsulting.net</span></div> */}
                </div>
            </div>
        </div>
        </>
    );
}

export default Header