import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

var numbers = [...Array(12).keys()];
var services = [
  {title:'IT Training & Placement',link:'/It-Training',desc:'',logo:'fa-solid fa-industry'},
  {title:'IT Strategy & Consulting',link:'/consulting',desc:'',logo:'fa-solid fa-sitemap'},
  {title:'Software Development',link:'/Software-development',desc:'',logo:'fa-solid fa-terminal'},
  {title:'Mobile App Development',link:'/Mobile-app-development',desc:'',logo:'fa-brands fa-android'},
  {title:'Infrastructure Management Services',link:'/Infrastructure-management-service',desc:'',logo:'fa-solid fa-landmark'},
  {title:'Business Analytics',link:'/business',desc:'',logo:'fa-solid fa-business-time'},
  {title:'Enterprise Resourcing',link:'/Enterprise-resourcing',desc:'',logo:'fa-solid fa-building'},
  {title:'Web Development',link:'/webDevelopment',desc:'',logo:'fa-brands fa-html5'},
  {title:'UI/UX Design & Development',link:'/UI-UX-design',desc:'',logo:'fa-brands fa-figma'},
  {title:'CMS Development',link:'/Cms',desc:'',logo:'fa-brands fa-wordpress'},
  {title:'Branding',link:'/branding',desc:'',logo:'fa-solid fa-earth-americas'},
  {title:'Cloud Services',link:'/cloud-Service',desc:'',logo:'fa-solid fa-cloud'},
]


function Services() {
  const navigate = useNavigate();
  return (
    <div className="service_page">
      <div
        className="block1 lightbg"
        data-aos="zoom-in-up"
        data-aos-offset="100"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <div className="container">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Services
            </text>
          </svg>
        </div>
      </div>
      <div className="block2 Darkbg headings">
        <div className="container">
        <h1 className="mb-5">Services</h1>
          <div className="row m-0">
            {
              services.map((val,i) => (
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <motion.button
                      className="motion-card"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="logoIcon">
                            <i className={val.logo}></i>
                          </div>
                          <h5 className="card-title mb-3" key={i}>{val.title}</h5>
                          <div className="content"></div>
                        </div>
                      <div className="card-footer">
                        <button class="button learn-more" onClick={() => navigate('' + val.link)}>
                          <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                          </span>
                          <span class="button-text">Learn More</span>
                        </button>
                      </div>
                    </div>
                  </motion.button>
                  
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
      <div className="Darkbg p-0">
        <div className="container p-0">
          <hr className="m-0" />
        </div>
      </div>
    </div>
  );
}

export default Services;
