// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import infra from '../../assets/Images/servives/infra.svg'

function Infra(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="infra-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Infrastruture Management Services'></Banner>
                    </div>
                </div>
                
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Sparklex Technologies is a Infrastructure Management Services (IMS) refer to the comprehensive management and maintenance of an organization's IT infrastructure, including hardware, software, networks, servers, data centers, and other technology resources. The goal of IMS is to ensure that the IT infrastructure operates efficiently, securely, and reliably to support the organization's business operations and objectives. IMS is crucial for maintaining a stable and responsive technology environment.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img className='mobile-width' src={infra} alt="" style={{width: '70%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Overview</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12">
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>01. Hardware Management:</h5>
                                    <p> Procurement and provisioning of hardware resources (servers, computers, storage devices, etc.). Installation, configuration, and maintenance of hardware components. Monitoring hardware health and performance to prevent failures and downtime.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>02. Network Management:</h5>
                                    <p> Design, implementation, and maintenance of network infrastructure. Network monitoring, performance optimization, and troubleshooting. Security management to safeguard against cyber threats and unauthorized access.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>03. Server Management:</h5>
                                    <p>Installation, configuration, and administration of server systems. Monitoring server health, capacity planning, and resource optimization. Patch management and software updates to ensure security and stability.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>04. Data Center Management:</h5>
                                    <p>Management of physical data center facilities, including power, cooling, and physical security. Data center consolidation, virtualization, and cloud integration strategies. Disaster recovery planning and implementation to ensure business continuity.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>05. Storage Management:</h5>
                                    <p> Storage provisioning, allocation, and optimization. Data backup and recovery solutions to protect against data loss. Data archiving and lifecycle management.</p>
                                </div>
                            </div>                            
                            <div className="col-lg-6 col-sm-12">
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>06. Software Management:</h5>
                                    <p> Installation, configuration, and maintenance of software applications and operating systems. License management and compliance. Software updates, patches, and security enhancements.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>07. Security Management:</h5>
                                    <p> Implementing security measures to protect the infrastructure from cyber threats and unauthorized access. Monitoring and responding to security incidents. Conducting regular security audits and assessments.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>08. Cloud Management:</h5>
                                    <p> Management of cloud resources, including virtual machines, storage, and networking. Cloud deployment strategies, optimization, and cost management. Ensuring data security and compliance in the cloud environment.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>09. Performance Monitoring and Management:</h5>
                                    <p> Continuous monitoring of infrastructure components for performance issues and bottlenecks. Analyzing and optimizing system performance to ensure efficient operations.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                    <h5>10. IT Service Management (ITSM):</h5>
                                    <p> Implementing IT service management frameworks like ITIL (Information Technology Infrastructure Library) to align infrastructure services with business needs. Incident, problem, and change management processes to ensure service quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="block5 Darkbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                            <li style={{'--accent-color': '#36b9ea'}}>
                                IT strategy and consulting firms work closely with clients to understand their unique challenges and goals, tailoring solutions that drive innovation, efficiency, and growth through technology. Organizations often engage these services when they need external expertise, objective insights, or a fresh perspective on their technology initiatives.
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

export default Infra