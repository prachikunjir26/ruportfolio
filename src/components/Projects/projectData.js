import React from 'react'
import Project from './project'
import aed1 from '../../images/aed1.png'
import piNNit from '../../images/piNNit.png' 
import website from '../../images/website.png'

const ProjectData = ({Title,Info1,Info2,Img1,Title2,Info3,Info4,Img2}) => {
  return (
      <div>
        <Project 
        Title="pNNit - Mern Stack Application"
        Info1="A google keep clone. "
        Info2="Developed a Notes application from scratch using MERN Stack. This Application has Express - NodeJS backend and frontend is developed in React."
        Img1={piNNit}
        Title2="E-Farming"
        Info3="Developed in Swing and Java"
        Info4="Designed and developed minimalistic and userfriendly UI"
        Img2={aed1}
        ></Project>

        <Project 
        Title="Personal Website 1"
        Info1="Developed using HTML, CSS, JavaScript and React. Given minimalistic look"
        Img1={website}
        Title2="Library Management System"
        Info3="Developed in Swing and Java"
        Info4="Designed and developed minimalistic and userfriendly UI"
        Img2={website}
        ></Project>
    </div>
  )
}

export default ProjectData