// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import infra from '../../assets/Images/servives/enterprise.svg'

function Enterprise(props) {

    return(
        <>
            <div className="enterprise-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Enterprise Resourcing'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Sparklex Technologies is a It seems like you're referring to "Enterprise Resource Planning" (ERP), which is a software solution and a business strategy that integrates various departments and functions within an organization into a unified system. ERP systems facilitate the flow of information and processes across different parts of the organization, enabling improved coordination, efficiency, and decision-making.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={infra} alt="" style={{width: '40%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Overview</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12"  data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3">
                                    <h5>01. Integration of Processes:</h5>
                                    <p>ERP systems integrate various business processes, such as finance, human resources, supply chain management, manufacturing, sales, and customer service. This integration helps eliminate data silos and allows for better communication and collaboration between departments.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>02. Centralized Database:</h5>
                                    <p>ERP systems use a centralized database that stores and manages data from different departments. This ensures data consistency and accuracy, reducing the need for duplicate data entry and minimizing errors.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>03. Standardization and Automation:</h5>
                                    <p> ERP systems often include predefined workflows and best practices, which help standardize processes across the organization. Automation of routine tasks can lead to increased efficiency and reduced manual effort.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>04. Real-time Insights:</h5>
                                    <p> With a centralized database and integrated processes, ERP systems provide real-time insights into various aspects of the business. This enables better decision-making based on up-to-date information.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>05. Modules and Functionality:</h5>
                                    <p> ERP systems consist of modules that address specific business functions. Common modules include: <br />
                                        Financial Management: Accounting, budgeting, and financial reporting.<br />
                                        Human Resources Management: Payroll, employee records, and performance management.<br />
                                        Supply Chain Management: Inventory, procurement, and supplier management.<br />
                                        Manufacturing: Production planning, scheduling, and quality control.<br />
                                        Sales and Customer Relationship Management (CRM): Order processing, sales tracking, and customer support.
                                    </p>
                                </div>
                            </div>                            
                            <div className="col-lg-6 col-sm-12"   data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <div className="col-lg-12 mb-3">
                                    <h5>06. Benefits of ERP:</h5>
                                    <p>Improved Efficiency: Streamlined processes and automation lead to increased operational efficiency.<br />
                                        Enhanced Collaboration: Departments can work together more effectively, improving overall productivity.<br />
                                        Better Decision-Making: Real-time data and insights enable informed and data-driven decision-making.<br />
                                        Cost Savings: Reduction in manual efforts, minimized errors, and optimized processes can lead to cost savings.<br />
                                        Scalability: ERP systems can scale as a business grows, accommodating increased demand and complexity.<br />
                                        Regulatory Compliance: Helps ensure adherence to regulatory and industry standards.<br />
                                    </p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>07. Implementation Challenges:</h5>
                                    <p> Implementing an ERP system can be complex and challenging. Some common challenges include selecting the right system, data migration, customization, change management, and user training.</p>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <h5>08. Cloud-based ERP:</h5>
                                    <p> Modern ERP systems are increasingly offered as cloud-based solutions, providing greater flexibility, accessibility, and reduced IT infrastructure costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="block5 Darkbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                            <li style={{'--accent-color': '#E9C2C5'}}>
                                Selecting the right ERP system and successfully implementing it requires careful planning, thorough understanding of business needs, and collaboration among different stakeholders. When implemented effectively, an ERP system can significantly improve an organization's operational efficiency and competitiveness.
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

export default Enterprise