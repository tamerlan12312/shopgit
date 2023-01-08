import React, { Component } from 'react'
import Footer from '../components/Footer'
import Section1 from '../components/Section1'
import Section2Data from '../components/Section2Data'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7Data from '../components/Section7Data'
 class Home extends Component {
  render() {
    return (
     <>
     
  
   <Section1/>
   <Section2Data/>
   <Section3/>
   <Section4/>
   <Section5/>
   <Section6/>
   <Section7Data/>
   <Footer/>
     
     </>
    )
  }
}

export default Home