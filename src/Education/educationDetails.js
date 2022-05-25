import React from 'react'
import Fade from "react-reveal/Fade"


const EducationDetails = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col items-center text-white mt-20 font-poppins">
          <Fade bottom cascade>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <a
                href="#"
                className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
              >
                <h2 className="text-3xl font-bold">Bachlor of Engineering</h2>
                <h2 className="text-xl">Pune University, India</h2>
                <p className="mt-10 opacity-50">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
              </a>
              <a
                href="#"
                className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
              >
                <h2 className="text-3xl font-bold">Master of Science in Information Systems</h2>
                <h2 className="text-xl">Northeastern University, Boston, MA</h2>
                <p className="mt-10 opacity-50">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
              </a>
            </div>
          </Fade>
        </div>
      )
}

export default EducationDetails