import React from 'react'
import Header from './../Components/appbar/Header'
import Discover from './../Components/discover/Discover'
import OurProjects from './../Components/ourprojects/OurProjects'
import Esteemed from './../Components/esteemed/Esteemed'
import Sevrvices from './../Components/services/Sevrvices'
import Team from './../Components/meettheTeam/Team'
import Testimonials from './../Components/testimonlals/Testimonials'
import INSIGHTS from './../Components/insights/INSIGHTS.jsx'
import Footer from './../Components/footer/Footer.jsx'
export default function Home() {
  return (
    <div>
<Header/>   
   <Discover/>
   <OurProjects/>
    <Esteemed/>
    <Sevrvices/>
    <Team/>
    <Testimonials/>
    <INSIGHTS/>
<Footer/>

    </div>
  )
}
