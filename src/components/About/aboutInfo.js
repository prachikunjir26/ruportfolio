import React from 'react'
import profilepic from "../../images/profile_pic.jpg"

const AboutInfo = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-white bg-opacity-10 w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
                <img
            className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
            src={profilepic}
            ></img>
            <div className="flex flex-col">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Prachi Kunjir</h1>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
            Enthusiastic Front-end Developer.{" "}<br />
            Interested in  UI/UX.
            Always eager to learn new things.
            As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things look in a specific way,
            and my mission-driven work ethic to literally make an impact. That's why I’m excited to work at a high growth company with abundance of opportunities.
            <br />
            Current Focus: Front-end, UI/UX
          </p>
        </div>
            </div>
        </div>
    
  )
}

export default AboutInfo