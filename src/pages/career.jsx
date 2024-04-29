import React from 'react'
import { useState, useEffect } from 'react'

var joblist = [
  {title:'Digital Marketing Analyst',type:'Permanent',exp:'3-5',date:'March 20, 2023',skills:'NA'},
  {title:'Web Developer',type:'Permanent',exp:'3-5',date:'March 20, 2023',skills:'HTML5,CSS,JS'},
  {title:'Software Inventory Management',type:'Internship',exp:'NR',date:'March 20, 2023',skills:'we'},
  {title:'Content Writer',type:'Permanent',exp:'1-2',date:'March 20, 2023',skills:'NA'},
  {title:'Creative Designer',type:'Permanent',exp:'1-2',date:'March 20, 2023',skills:'NA'},
  {title:'Devops Engineer',type:'Permanent',exp:'4-6',date:'March 20, 2023',skills:'Jenkins,AWS,Docker'},
  {title:'UI & UX DESIGN',type:'Internship',exp:'NR',date:'March 20, 2023',skills:'NA'},
  {title:'Java Senior Developer',type:'Permanent',exp:'5+',date:'March 20, 2023',skills:'JAVA,J2EE,Spring Boot'},
  {title:'MOBILE APP DEVELOPMENT',type:'Internship',exp:'NR',date:'March 20, 2023',skills:'NA'},
  {title:'WEB DEVELOPMENT',type:'Internship',exp:'NR',date:'March 20, 2023',skills:'NA'},
]

function Career() {
  const [jobType, setJobType] = useState("All")
  // useEffect(() => {
  //   setJobType(jobType)
  // },[])
  return (
    // <div>career page consists of Internship aswell Training</div>
    <>
        <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
            <div className="container">
                <svg viewBox="0 0 1320 300">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                            Career
                    </text>
                </svg>	
            </div>
        </div>
        <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
          <div className="container">
            <h1 className='mb-5'>Jobs for Experinced & Internship</h1>
            <div class="dropdown carrer">
              <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-filter"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" onClick={() => setJobType('All')}>All</a></li>
                <li><a class="dropdown-item" onClick={() => setJobType('Internship')}>Internship</a></li>
                <li><a class="dropdown-item" onClick={() => setJobType('Permanent')}>Permanent</a></li>
              </ul>
            </div>
            <div className="header">
                <div className="status-col">
                  <label> Title </label>
                </div>
                <div className="progress-col">
                  <label> Type </label>
                </div>                
                <div className="dates-col">
                  <label> Experience </label>
                </div>
                <div className="priority-col">
                  <label> Posted on </label>
                </div>                
                <div className="icon-col">
                  <label>Skills</label>
                </div>                
                <div className="applt-col"  style={{'max-width': '80px'}}>
                  <label>Apply</label>
                </div>

              </div>
              <ul className="task-items">
                {joblist.map((val,index) => (
                  <li className={ (val.type == jobType? 'show':jobType == 'All'? 'show': 'hide' ) + " item " + (val.type == 'Permanent' ? 'type1':'type4')}>
                    <div className="task">
                      <div className="icon">{index}</div>
                      <div className="name">{val.title} </div>
                    </div>
                    <div className="status">
                      <div className={"icon " + (val.type == 'Permanent' ? '':'off')}> </div>
                      <div className="text"> {val.type} </div>
                    </div>
                    <div className="dates">
                      <div className="bar"> {val.type == 'Permanent' ? val.exp + " year's":'Not Required'}</div>
                    </div>
                    <div className="priority">
                      <div className="bar">{val.date} </div>
                    </div>
                    <div className="user">
                      {val.skills}
                    </div>
                    <div className="" style={{'max-width': '80px'}}>
                      <button type="button" class="btn btn-outline-danger">
                        <i class="fa-brands fa-telegram"></i>
                      </button>
                    </div>
                  </li>
                ))}               
                <li className="item type2">
                  <div className="task">
                    <div className="icon"> </div>
                    <div className="name"> </div>
                  </div>

                  <div className="status">
                    <div className="icon warning"> </div>
                    <div className="text"> None </div>
                  </div>

                  <div className="dates">
                    <div className="bar"> </div>
                  </div>

                  <div className="priority">
                    <div className="bar"> </div>
                  </div>

                  <div className="user">
                    {/* <img src="https://source.unsplash.com/40x40/?american" alt="Image 001" className="owner-img" /> */}
                  </div>
                </li>		
                
              </ul>


          </div>
        </div>
        <div className="Darkbg p-0">
          <div className="container p-0">
            <hr className="m-0" />
          </div>
        </div>
    </>
  )
}

export default Career