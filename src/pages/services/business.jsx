// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import business1 from '../../assets/Images/servives/business1.svg'
import business2 from '../../assets/Images/servives/business2.svg'
import business3 from '../../assets/Images/servives/business3.svg'
import business4 from '../../assets/Images/servives/business4.svg'
import business5 from '../../assets/Images/servives/business5.svg'

function Business(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="business-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Business Analytics'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Sparklex Technologies is a Business analytics involves the use of data analysis and statistical techniques to gain insights, make informed decisions, and drive improvements in business processes, strategies, and outcomes. It leverages data to uncover patterns, trends, correlations, and other valuable information that can guide decision-making and support business goals. Business analytics encompasses a range of methodologies, tools, and approaches aimed at converting raw data into actionable insights.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={business1} alt="" style={{width: '60%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Types of Business Analytics</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12 l-img">
                                <img src={business2} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="100" data-aos-duration="600">
                                    <h5>01. Descriptive Analytics:</h5>
                                    <p> Focuses on summarizing historical data to provide insights into what has happened in the past. It involves reporting, dashboards, and visualizations to present data in a meaningful way.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="90" data-aos-delay="100" data-aos-duration="600">
                                    <h5>02. Diagnostic Analytics:</h5>
                                    <p>Aims to understand why certain events occurred by analyzing data to identify patterns and correlations. Root cause analysis and drill-down techniques are often used in diagnostic analytics.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="80" data-aos-delay="100" data-aos-duration="600">
                                    <h5>03. Predictive Analytics:</h5>
                                    <p>Utilizes historical data and statistical algorithms to make predictions about future outcomes. Machine learning and data modeling are commonly employed to forecast trends and behaviors.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="70" data-aos-delay="100" data-aos-duration="600">
                                    <h5>04. Prescriptive Analytics:</h5>
                                    <p>Recommends actions to optimize outcomes based on predictive models. It provides actionable insights and suggests decisions to achieve desired objectives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block4 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>Process of Business Analytics</h1>
                            <div className="row mb-0">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>01. Data Collection:</h5>
                                        <p>Gathering relevant data from various sources, including databases, spreadsheets, APIs, and external datasets.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>02. Data Cleaning and Preparation:</h5>
                                        <p> Ensuring data quality by cleaning, transforming, and structuring it for analysis. Exploratory Data Analysis (EDA): Exploring data patterns, correlations, and anomalies using statistical and visual techniques.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>03. Model Building:</h5>
                                        <p> Creating predictive or prescriptive models using algorithms and statistical methods. Model Evaluation and Validation: Assessing model accuracy and reliability using validation techniques and performance metrics.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>04. Insight Generation:</h5>
                                        <p> Extracting meaningful insights from data analysis to answer specific business questions.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>05. Decision-Making:</h5>
                                        <p> Using insights to make informed business decisions and drive improvements. Communication: Presenting findings and recommendations to stakeholders through reports, dashboards, visualizations, and presentations.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 r-img">
                                    <img src={business3} alt="" style={{width: '100%'}} />
                                </div>
                            </div>  
                        </div>
                </div>

                <div className="block4 lightbg headings">
                    <div className="container">
                    <h1 className='mb-5'>Tools and Technologies</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12 l-img">
                                <img src={business4} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="80" data-aos-delay="100" data-aos-duration="600">
                                    <h5>01. Statistical Software:</h5>
                                    <p> Tools like R and Python with libraries such as pandas, NumPy, and scikit-learn are commonly used for data analysis and modelling.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="80" data-aos-delay="100" data-aos-duration="600">
                                    <h5>02. Business Intelligence (BI) Tools:</h5>
                                    <p>Platforms like Tableau, Power BI, and QlikView help create interactive visualizations and reports.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="70" data-aos-delay="100" data-aos-duration="600">
                                    <h5>03. Predictive Analytics Tools:</h5>
                                    <p> Software like IBM SPSS, SAS, and RapidMiner support advanced analytics and predictive modelling.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="60" data-aos-delay="100" data-aos-duration="600">
                                    <h5>04. Machine Learning Platforms:</h5>
                                    <p> Tools like TensorFlow, PyTorch, and scikit-learn facilitate machine learning model development.</p>
                                </div>
                                <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="50" data-aos-delay="100" data-aos-duration="600">
                                    <h5>05. Database Management Systems:</h5>
                                    <p> SQL and NoSQL databases are used for data storage, retrieval, and analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block5 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>Business Applications</h1>
                            <div className="row mb-0">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>01. Marketing Analytics:</h5>
                                        <p> Analyzing customer behavior, campaign performance, and market trends to optimize marketing strategies.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>02. Financial Analytics:</h5>
                                        <p>Assessing financial data to support budgeting, forecasting, risk assessment, and investment decisions.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>03. Operations Analytics:</h5>
                                        <p> Improving supply chain management, inventory optimization, and production processes.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>04. Human Resources Analytics:</h5>
                                        <p> Analyzing workforce data to enhance talent acquisition, employee retention, and performance management.</p>
                                    </div>
                                    <div className="col-lg-12 mb-3" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                        <h5>05. Customer Analytics:</h5>
                                        <p>Understanding customer preferences, segments, and lifetime value to enhance customer experiences.</p>
                                    </div>
                                </div>                            
                                <div className="col-lg-6 col-sm-12 r-img">
                                    <img src={business5} alt="" style={{width: '100%'}} />
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className="block6 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                            <li style={{'--accent-color': '#3ecbb1'}}>Informed Decision-Making: Provides data-driven insights for making well-informed business decisions.</li>
                            <li style={{'--accent-color': '#36b9ea'}}>Competitive Advantage: Helps organizations gain a competitive edge by identifying opportunities and potential risks.</li>
                            <li style={{'--accent-color': '#fcc003'}}>Improved Efficiency: Optimizes processes, resource allocation, and operational efficiency.</li>
                            <li style={{'--accent-color': '#fb337b'}}>Enhanced Customer Experiences: Allows for better understanding of customer behavior and preferences.</li>
                            <li style={{'--accent-color': '#9c54e5'}}>Innovation and Strategy: Supports innovation and strategic planning based on data-driven insights.</li>
                            <li style={{'--accent-color': '#E9C2C5'}}>Business analytics is a powerful tool for organizations across industries to harness the potential of their data and gain valuable insights that drive growth, efficiency, and success.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Business