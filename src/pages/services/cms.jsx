// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";


import Banner from '../../components/banner.jsx'
import cms1 from '../../assets/Images/servives/cms1.svg'
import cms2 from '../../assets/Images/servives/cms2.svg'
import cms3 from '../../assets/Images/servives/cms3.svg'
import cms4 from '../../assets/Images/servives/cms4.svg'
import cms5 from '../../assets/Images/servives/cms5.svg'

function Cms(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="cms-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='CMS Development'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Sparklex Technologies is a Web development refers to the process of creating websites and web applications for the Internet or an intranet. It involves a combination of designing, coding, testing, and maintaining web-based projects to provide users with an engaging and functional online experience. Web development encompasses both front-end and back-end aspects of building websites.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img className='mobile-width' src={cms1} alt="" style={{width: '50%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Core Components of a CMS</h1>
                        <div className="row mb-0">
                        <div className="col-lg-6 col-sm-12 l-img">
                            <img src={cms2} alt="" style={{width: '100%'}} />
                        </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. Content Creation and Editing:</h5>
                                    <p> Users can create and edit content using a user-friendly interface similar to word processing software.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. Content Organization:</h5>
                                    <p> Content is organized into categories, tags, or other structures to facilitate easy navigation and retrieval.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. User Management:</h5>
                                    <p> Different user roles and permissions can be defined to control access and editing rights.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. Media Management:</h5>
                                    <p> Support for uploading and managing various media types like images, videos, and documents.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Templates and Themes:</h5>
                                    <p> Users can apply templates and themes to control the visual appearance of the website or application.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>06. Workflow and Publishing:</h5>
                                    <p> Content can go through approval processes before being published, ensuring quality control.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>07. SEO and Metadata:</h5>
                                    <p> Tools to optimize content for search engines through metadata, URLs, and other SEO features.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Custom CMS Development</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. Requirements Gathering:</h5>
                                    <p>Understanding the client's content management needs, features, and design preferences.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. Design and UI/UX: </h5>
                                    <p> Creating the user interface and experience design that aligns with the client's branding and goals.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. Backend Development:</h5>
                                    <p>Developing the backend system that handles content storage, user management, and other functionalities.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. Frontend Development:</h5>
                                    <p> Building the user-facing part of the CMS, including content editing and administration interfaces.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Web Development Process:</h5>
                                    <p> Planning: Defining project goals, requirements, and target audience. Design: Creating wireframes, mockups, and UI/UX design concepts. Development: Writing code for front-end and back-end functionality, and integrating various components. Testing: Testing the website for functionality, performance, and compatibility across different browsers and devices. Deployment: Launching the website on a live server or hosting platform. Maintenance: Continuously updating, optimizing, and adding new features to the website.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>06.Testing:</h5>
                                    <p>Thoroughly testing the CMS to ensure functionality, security, and usability.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>07. Deployment:</h5>
                                    <p>Launching the CMS on the desired hosting environment.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>08. Training and Support:</h5>
                                    <p> Providing training for users and ongoing support to address any issues or updates.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <p>Custom CMS development involves creating a CMS tailored to specific requirements, which is particularly useful when off-the-shelf solutions do not meet the needs of a business. Key steps in custom CMS development include:</p>
                                <div>
                                    <img src={cms3} alt="" style={{width: '100%'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block5 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Popular CMS Platforms</h1>
                        <div className="row mb-0">
                        <div className="col-lg-6 col-sm-12 l-img">
                            <p>Several popular CMS platforms are widely used and can be customized to meet specific needs. Some examples include:</p>
                            <div>
                                <img src={cms4} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. WordPress:</h5>
                                    <p>Widely used for blogs, websites, and e-commerce stores. Offers a wide range of themes and plugins for customization.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. Joomla:</h5>
                                    <p> Suitable for complex websites and applications with a focus on flexibility and extensibility.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. Drupal:</h5>
                                    <p> Known for its robustness and scalability, suitable for large and complex projects.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. Magento:</h5>
                                    <p> Specifically designed for e-commerce websites with features tailored for online stores.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Wix, Squarespace, Weebly:</h5>
                                    <p> User-friendly platforms for creating websites with pre-designed templates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Benefits of CMS Development</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. Ease of Content Management:</h5>
                                    <p>Non-technical users can manage content without relying on developers.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. Customization:</h5>
                                    <p> Custom CMSs can be tailored to specific needs and provide unique features.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. Scalability:</h5>
                                    <p> Can handle growing content and user demands.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. SEO:</h5>
                                    <p>Many CMSs offer built-in SEO tools to improve search engine visibility.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Collaboration:</h5>
                                    <p>Multiple users can collaborate on content creation and management.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={cms5} alt="" style={{width: '55%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                                
                <div className="block5 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                            <li style={{'--accent-color': '#9c54e5'}}>
                                Whether using an existing CMS platform or developing a custom solution, CMS development empowers businesses to efficiently manage their digital content, maintain a dynamic online presence, and engage with their target audiences effectively.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cms