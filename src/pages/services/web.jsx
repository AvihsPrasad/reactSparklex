// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import web1 from '../../assets/Images/servives/web1.svg'
import web2 from '../../assets/Images/servives/web2.svg'
import web3 from '../../assets/Images/servives/web3.svg'

function Web(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="web-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Web Development'></Banner>
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
                                <img src={web1} alt="" style={{width: '70%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Overview</h1>
                        <div className="row mb-0">
                        <div className="col-lg-6 col-sm-12 l-img">
                            <img src={web2} alt="" style={{width: '100%'}} />
                        </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. Front-End Development:</h5>
                                    <p> Front-end development focuses on the user interface (UI) and user experience (UX) of a website. It involves creating the visual elements that users interact with directly in their web browsers. Key aspects of front-end development include:</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. HTML (Hypertext Markup Language):</h5>
                                    <p> Used to structure the content and layout of web pages.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. CSS (Cascading Style Sheets):</h5>
                                    <p> Responsible for styling and formatting the appearance of web pages.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. JavaScript:</h5>
                                    <p> A scripting language used to add interactivity and dynamic features to websites.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Responsive Design:</h5>
                                    <p> Ensuring that websites are visually appealing and functional on various devices and screen sizes. User Experience (UX) Design: Designing interfaces that are user-friendly, intuitive, and provide a positive browsing experience.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>06. Front-End Frameworks:</h5>
                                    <p>Libraries and frameworks like Bootstrap, React, Angular, and Vue.js are used to streamline development and enhance user interface design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Overview</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3" >
                                    <h5>01. Back-End Development:</h5>
                                    <p>Back-end development involves building the server-side components and functionality that enable websites to handle data, process requests, and interact with databases.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>02. Server-Side Languages: </h5>
                                    <p>Programming languages like Python, Ruby, PHP, Java, and Node.js used for creating server-side logic. Databases: Storing and managing data using database systems such as MySQL, PostgreSQL, MongoDB, or SQLite. Server Management: Configuring and managing web servers and server environments to ensure optimal performance and security. APIs (Application Programming Interfaces): Creating APIs to enable communication between the front-end and back-end systems or to integrate with third-party services.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>03. Security:</h5>
                                    <p> Implementing security measures to protect against vulnerabilities and unauthorized access. Content Management Systems (CMS): Using platforms like WordPress, Drupal, or Joomla to simplify content creation and management.</p>
                                </div>
                                <div className="col-lg-12 mb-3" >
                                    <h5>04. Full-Stack Development:</h5>
                                    <p> Full-stack developers are proficient in both front-end and back-end development. They have the skills to handle all aspects of building a web application, from designing the user interface to setting up the server infrastructure.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Web Development Process:</h5>
                                    <p> Planning: Defining project goals, requirements, and target audience. Design: Creating wireframes, mockups, and UI/UX design concepts. Development: Writing code for front-end and back-end functionality, and integrating various components. Testing: Testing the website for functionality, performance, and compatibility across different browsers and devices. Deployment: Launching the website on a live server or hosting platform. Maintenance: Continuously updating, optimizing, and adding new features to the website.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>06. Web Development Tools and Technologies:</h5>
                                    <p> Text editors or Integrated Development Environments (IDEs) for coding. Version control systems like Git for collaboration and code management. Web development frameworks and libraries for streamlining development. DevOps tools for automated deployment and continuous integration.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>07. Web Development Trends:</h5>
                                    <p> Web development is constantly evolving. Current trends include: Progressive Web Apps (PWAs) for improved user experiences. Single-Page Applications (SPAs) for seamless navigation. Serverless architecture for efficient resource management. Voice search optimization and AI integration. Increased focus on web accessibility and inclusivity.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={web3} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                                
                <div className="block5 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                            <li style={{'--accent-color': '#fb337b'}}>
                                Successful web development requires a strong understanding of coding languages, design principles, user experience, and current technology trends. Whether you're building a personal blog, an e-commerce platform, or a complex web application, web development skills are essential to create engaging and functional online experiences.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web