// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import design1 from '../../assets/Images/servives/design1.svg'
import design2 from '../../assets/Images/servives/design2.svg'
import design3 from '../../assets/Images/servives/design3.svg'
import design4 from '../../assets/Images/servives/design4.svg'
import design5 from '../../assets/Images/servives/design5.svg'

function Design(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="design-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='UI/UX Design & Development'></Banner>
                    </div>
                </div>
                
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Sparklex Technologies is a UI (User Interface) design and UX (User Experience) design are two essential components of creating successful and user-friendly digital products, such as websites, applications, and software. UI design focuses on the visual elements and layout of the user interface, while UX design is concerned with the overall experience and usability of the product.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img className='mobile-width' src={design1} alt="" style={{width: '75%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>UI Design</h1>
                        <div className="row mb-0">
                        <div className="col-lg-6 col-sm-12 l-img">
                            <img src={design2} alt="" style={{width: '100%'}} />
                        </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. User Interface (UI) Design:</h5>
                                    <p> UI design involves creating visually appealing and interactive interfaces that users interact with directly. It focuses on the look, feel, and presentation of the product.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. Visual Design:</h5>
                                    <p> Designing elements such as buttons, icons, typography, color schemes, and layout to create a cohesive and aesthetically pleasing user interface.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. Responsive Design:</h5>
                                    <p> Ensuring that the interface is visually appealing and functional on various devices and screen sizes, including desktops, tablets, and smartphones.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. Consistency:</h5>
                                    <p> Maintaining a consistent design language and style throughout the interface to provide a coherent user experience.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Accessibility:</h5>
                                    <p> Designing with accessibility in mind to ensure that the interface is usable by individuals with disabilities and conforms to accessibility standards.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>06. Animation and Interaction:</h5>
                                    <p> Adding animations, transitions, and interactive elements to enhance user engagement and guide users through the interface.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings">
                    <div className="container">
                    <h1 className='mb-5'>UX Design</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. User Experience (UX) Design: </h5>
                                    <p> UX design focuses on understanding users' needs, behaviors, and motivations to create a seamless and enjoyable experience when interacting with a product. </p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. User Research:</h5>
                                    <p> Conducting research to understand user behaviors, preferences, and pain points. This includes surveys, interviews, and usability testing.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. Full-Stack Development:</h5>
                                    <p> Full-stack developers are proficient in both front-end and back-end development. They have the skills to handle all aspects of building a web application, from designing the user interface to setting up the server infrastructure.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>04.  Information Architecture:</h5>
                                    <p> Organizing and structuring content in a logical and intuitive way to facilitate easy navigation and information retrieval.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05.Wireframing and Prototyping:</h5>
                                    <p> Creating low-fidelity wireframes and interactive prototypes to visualize the layout and flow of the product before development.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={design3} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    {/* <h1 className='mb-5'>Overview</h1> */}
                        <div className="row mb-0">
                        <div className="col-lg-6 col-sm-12 l-img">
                            <img src={design4} alt="" style={{width: '100%'}} />
                        </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>06. Usability Testing: </h5>
                                    <p>Testing the product with real users to identify usability issues and gather feedback for improvement.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>07. Persona Development: </h5>
                                    <p>Creating user personas to represent different user groups and their characteristics, needs, and goals.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>08. User Flows:</h5>
                                    <p> Mapping out user journeys and interactions to ensure a smooth and intuitive navigation experience.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>09. JavaScript:</h5>
                                    <p> A scripting language used to add interactivity and dynamic features to websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings">
                    <div className="container">
                    <h1 className='mb-5'>UI/UX Development</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. UI/UX Development:</h5>
                                    <p>UI/UX development involves implementing the design concepts created by UI/UX designers into functional and interactive digital products. </p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. Front-End Development:</h5>
                                    <p> Writing HTML, CSS, and JavaScript code to create the visual elements and interactivity of the user interface.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. Responsive Design Implementation:</h5>
                                    <p>Ensuring that the design is responsive and adaptable to different screen sizes and devices.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. Interaction Design:</h5>
                                    <p> Implementing animations, transitions, and interactive elements to create a dynamic and engaging user experience.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Integration:</h5>
                                    <p>Collaborating with back-end developers to integrate front-end components with back-end functionality and data.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>06. Usability Testing:</h5>
                                    <p> Conducting usability testing to identify and fix any issues that arise during the development process.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={design5} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                                
                <div className="block5 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                            <li style={{'--accent-color': '#fcc003'}}>
                            Effective UI/UX design and development require close collaboration between designers, developers, and stakeholders. By prioritizing user needs and creating a visually appealing and user-friendly interface, you can create digital products that provide a positive and memorable user experience.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Design