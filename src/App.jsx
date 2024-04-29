import { useState, useEffect,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider,Route,Link, } from "react-router-dom";
import './App.css'
import { AnimatePresence } from "framer-motion";
import Header from './components/headers.jsx'
import Footer from './components/footer.jsx'
import ComingSoon from './components/comingsoon.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Career from './pages/career.jsx'
import Contact from './pages/contact.jsx'
import Services from './pages/services.jsx'
import Web from './pages/services/web.jsx'
import Brand from './pages/services/branding.jsx'
import Business from './pages/services/business.jsx'
import Cloud from './pages/services/cloud.jsx'
import Cms from './pages/services/cms.jsx'
import Consult from './pages/services/consult.jsx'
import Design from './pages/services/design.jsx'
import Enterprise from './pages/services/enterprise.jsx'
import Infra from './pages/services/infrra.jsx'
import MobileApp from './pages/services/mobileapp.jsx'
import Software from './pages/services/software.jsx'
import Training from './pages/services/training.jsx'
import Java from './pages/trainings/java.jsx'
import Python from './pages/trainings/python.jsx'
import WebDev from './pages/trainings/web.jsx'
import Mobile from './pages/trainings/mobile.jsx'
import FullStack from './pages/trainings/fullstack.jsx'
import Digital from './pages/trainings/digital.jsx'
import AWS from './pages/trainings/aws.jsx'
import Selenium from './pages/trainings/selenium.jsx'
import Splunk from './pages/trainings/splunk.jsx'

const router = createBrowserRouter ([
  { path : "/", element: <Home />},
  { path : "/about", element: <About title="About us" />},
  { path : "/career", element: <Career></Career>},
  { path : "/services", element: <Services></Services>},
  { path : "/contact", element: <Contact></Contact>},
  { path : "/webDevelopment", element: <Web></Web>},
  { path : "/branding", element: <Brand></Brand>},
  { path : "/business", element: <Business></Business>},
  { path : "/cloud-Service", element: <Cloud></Cloud>},
  { path : "/Cms", element: <Cms></Cms>},
  { path : "/consulting", element: <Consult></Consult>},
  { path : "/UI-UX-design", element: <Design></Design>},
  { path : "/Enterprise-resourcing", element: <Enterprise></Enterprise>},
  { path : "/Infrastructure-management-service", element: <Infra></Infra>},
  { path : "/Mobile-app-development", element: <MobileApp></MobileApp>},
  { path : "/Software-development", element: <Software></Software>},
  { path : "/It-Training", element: <Training></Training>},
  { path : "/java", element: <Java></Java>},
  { path : "/python", element: <Python></Python>},
  { path : "/web", element: <WebDev></WebDev>},
  { path : "/mobile", element: <Mobile></Mobile>},
  { path : "/fullstack", element: <FullStack></FullStack>},
  { path : "/digital", element: <Digital></Digital>},
  { path : "/aws", element: <AWS></AWS>},
  { path : "/Selenium", element: <Selenium></Selenium>},
  { path : "/splunk", element: <Splunk></Splunk>},
  { path : "/comingsoon", element: <ComingSoon></ComingSoon>},
]);

function App() {
  const [backToTop, setBackToTop] = useState(false);
  const [loading, setLoading] = useState(0);
  const [antiloading, setAntiLoading] = useState(true);
  const count = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200){
        setBackToTop(true)
      } else{
        setBackToTop(false)
      }
    })
  }, [])
  useEffect(() => {
    if (count.current == null){
      const timeoutId = setTimeout(() => {
        setLoading(true)
        setAntiLoading(false)
      }, 2012); 
    }
    console.log(count)

    return () => { count.current = 1; }
  })

  // if (antiloading){
  //   return <Para />
  // }

  return (
    <>
      <div>
        <Header></Header>
        <div>
          <AnimatePresence mode="wait" initial={false}>
            <RouterProvider router={router} />
          </AnimatePresence>
        </div>
      <Footer></Footer> 
      </div>
      
      {backToTop && <button className=" btn btn-primary scrolltop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <i class="fa-solid fa-circle-up"></i>
      </button>}
    </>
  )
}

export default App
