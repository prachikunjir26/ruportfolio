import React from 'react'
import Fade from "react-reveal/Fade"
import neu from "../../images/neu.jpg"
import syntel from "../../images/syntel.jpg"

const WorkPage = () => {
    return (
        <div>
        <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-full w-full object-none overflow-hidden rounded-xl">
              <img src={neu}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">October 2021 - Currently Working</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Northeastern University
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
                Access Proctor Lead
              </h1>
              <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-full w-full object-none overflow-hidden rounded-xl">
              <img src={neu}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">January 2022 - May 2022</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Northeastern University
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
              Graduate Teaching Assistant
              </h1>
              <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
            <div className="h-full w-full object-none overflow-hidden rounded-xl">
              <img src={syntel}></img>
            </div>
            <div className="m-5">
              <h2 className="text-sm opacity-50">November 2018 - September 2021</h2>
              <h1 className="text-md font-bold font-poppins xxs:text-lg sm:text-4xl">
                Atos|Syntel
              </h1>
              <h1 className="text-sm font-poppins xxs:text-sm sm:text-3xl">
              Software Developer
              </h1>
              <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              
            </div>
          </div>
        </Fade>
        
      </div>
    )
}

export default WorkPage