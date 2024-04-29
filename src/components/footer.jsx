import WhiteLogo from '../assets/Images/logo-footer.png' 

var infoData = [
    {title: 'About Us', link:''},
    {title: 'Our Team', link:''},
    {title: 'Careers', link:''},
    {title: 'Privacy Policy', link:''},
    {title: 'Terms & Conditions', link:''},
    {title: 'Contact Us', link:''}
]
var serviceData = [
    {title: 'IT Training & Placement',link:''},
    {title: 'IT Strategy & Consulting',link:''},
    {title: 'Software Development',link:''},
    {title: 'Mobile App Development',link:''},
    {title: 'Infra Management',link:''},
    {title: 'Business Analytics',link:''},
    {title: 'Enterprise Resourcing',link:''},
    {title: 'Web Development',link:''},
    {title: 'UI / UX Design & Dev',link:''},
    {title: 'CMS Development',link:''},
    {title: 'ECommerce Solutions',link:''}
]
function Footer() {
  return (
    <>
      <footer className="Footer-page pt-5">
        <div className="container pb-2">
          <div className="row mb-5">
            <div className="col-lg-3 logo-block">
                <div className="whitLogo mb-3">
                    <img src={WhiteLogo} alt="Brand Logo" />
                </div>
                <p className="mb-2">
                Sparklex Technologies is a Software Development Company, IT career Training & Placements Services, Payroll Services and other technology services. 
                </p>
            </div>
            <div className="col-lg-3 service-block">
                <h5>Services</h5>
                <ul className="list-group list-group-flush">
                {serviceData.map((val,index) => 
                        <li className="list-group-item">
                            <a href={val.link}>{val.title}</a>
                        </li>)
                    }
                </ul>
            </div>
            <div className="col-lg-3 info-Block">
                <h5>Information</h5>
                <ul className="list-group list-group-flush">
                    {infoData.map((val,index) => 
                        <li className="list-group-item">
                            <a href={val.link}>{val.title}</a>
                        </li>)
                    }
                </ul>
            </div>
            <div className="col-lg-3">
                <h5>Follow Us</h5>
                <p>Follow us on Facebook for latest technical happenings and our latest releases.</p>
                <div className="row m-0 social-media">
                    <div className="col-lg-3 ps-0">
                        <a href='https://www.instagram.com/sparklextechnologies/' class="btn btn-outline-primary">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div className="col-lg-3 ps-0">
                        <a href='https://twitter.com/SparklexTech' class="btn btn-outline-primary">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <div className="col-lg-3 ps-0">
                        <a href='https://www.facebook.com/SparklexTechnologiesCanada' class="btn btn-outline-primary">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div className="col-lg-3 ps-0">
                        <a href='https://www.linkedin.com/company/sparklex-technologies-canada/' class="btn btn-outline-primary">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
          </div>
          <div className="row">
            <hr />
            <div className='p-0'>
                <p>Copyright ©
                    <span id="currentYear"> 2024 </span> 
                    Designed By 
                    <a href="https://www.sparklextechnologies.com/"> Sparklex Technologies </a> 
                    All Rights Reserved
                </p>    
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
