// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import software1 from '../../assets/Images/servives/software1.svg'
import software2 from '../../assets/Images/servives/software2.svg'


function Software(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="software-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Software Development'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="80" data-aos-delay="100" data-aos-duration="400">
                                <p>Sparklex Technologies is a Software development is the process of designing, coding, testing, and maintaining computer programs or software applications. It involves a systematic approach to creating software solutions that address specific business needs or user requirements. Software development encompasses a wide range of activities and disciplines, and it plays a crucial role in modern technology-driven industries.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={software1} alt="" style={{width: '60%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Software Development Process</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12">
                                <img src={software2} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="400">
                                    <h5>01. Requirement Analysis:</h5>
                                    <p> Understand the problem or need for which the software is being developed. Gather and document user requirements, both functional and non-functional. Define the scope, goals, and constraints of the project.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="400">
                                    <h5>02. Design:</h5>
                                    <p> Create a detailed design plan that outlines the software's architecture, components, and data flow. Design the user interface (UI) and user experience (UX) for the software application. Define the database structure, algorithms, and data models.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="400">
                                    <h5>03. Implementation (Coding):</h5>
                                    <p> Write the source code according to the design specifications. Choose a programming language and development tools suitable for the project. Follow coding standards and best practices to ensure code quality and maintainability.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="400">
                                    <h5>04. Testing:</h5>
                                    <p> Perform various levels of testing, including unit testing (testing individual components), integration testing (testing interactions between components), and system testing (testing the entire application). Identify and fix bugs and issues. Ensure that the software meets the specified requirements and functions as expected.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="400">
                                    <h5>05. Deployment:</h5>
                                    <p> Prepare the software for deployment by configuring servers, databases, and other necessary infrastructure. Release the software to production environments for use by end-users.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="400">
                                    <h5>06. Maintenance and Support:</h5>
                                    <p> Provide ongoing maintenance, updates, and improvements to the software. Address user feedback and bug reports. Make necessary adjustments to keep the software relevant and up to date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="block4 Darkbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="400">
                            <li style={{'--accent-color': '#3ecbb1'}}>
                                Successful software development requires a strong understanding of user needs, effective communication among team members, adherence to best practices, and continuous learning and improvement. It's important to choose the right development methodology based on the project's nature and requirements. Additionally, staying up to date with the latest technologies, trends, and security practices is essential for building high-quality software solutions.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="Darkbg p-0">
                    <div className="container p-0">
                    <hr className="m-0" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Software