import React from "react"
import Navbar from "./Navbar"

export default function Hero() {
  return (
    <header>
      <Navbar />
      <section className="animate__animated animate__fadeInUp animate__delay-1s">
        <div className="container">
          <div className="d-flex row align-items-center justify-content-between  ">
            <div className="col-12 col-md-6 order-3 order-md-1 mt-2 mt-md-0  ">
              <h1 className="h3" title="Biade Digital Hero Text">
                We Are Working On This<br />
                Website To Deliver A Better<br />
                User Interface &amp; User Experience ;)
              </h1>
              <div className="mt-2 mt-sm-3 " title="Biade Digital Hero Button">
                <a href="./download/" className="btn btn-light me-0 me-md-2 " type="button" title="Download Resume" download>
                  Download Resume
                </a>
                <a href="mailto:contact@biadedigital.com" className="btn btn-secondary " type="button" title="Send Mail">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="col-0 col-md-1 order-3 order-md-2">
            </div>
            <div className="col-9 col-md-4 order-1 order-md-3 mx-auto ">
              <img src="./img/svg/Hero Img.svg" className="img-fluid " title="Biade Digital Hero Image" alt="Hero Image" />
            </div>
            <div className="col-2 col-md-1 order-2 order-md-4 social-icon d-flex align-items-end">
              {/* Likendin Icon */}
              <a href="https://www.linkedin.com/in/olayeni-gbenga/" className="" target="_blank" rel="noopener noreferrer">
                <img src="./icon/linkedin-outlined.svg" className="" title="Linkedin Profile" alt="Linkedin Profile" />
              </a>
              {/* Github Icon */}
              <a href="https://github.com/Biadedigital" target="_blank" rel="noopener noreferrer" className="">
                <img src="./icon/github-fill.svg" className="" title="Github Profile" alt="Github Profile" />
              </a>
              {/* Codepen Icon */}
              <a href="https://codepen.io/9ightdev" target="_blank" rel="noopener noreferrer" className="">
                <img src="./icon/codepen-circle-filled.svg" className="" title="Codepen Profile" alt="Codepen Profile" />
              </a>
              {/* Dribble Icon */}
              <a href="https://dribbble.com/BiadeDigital" target="_blank" rel="noopener noreferrer" className="">
                <img src="./icon/dribble.svg" title="Dribble Profile" className="" alt="Dribble Profile" />
              </a>
              {/* Behance Icon */}
              <a href="https://www.behance.net/biadedigita341" target="_blank" rel="noopener noreferrer" className="">
                <img src="./icon/behance-circle-filled.svg" className="" title="Behance Profile" alt="Behance Profile" />
              </a>
              {/* Twitter Icon */}
              <a href="https://twitter.com/Gatoranking1/" target="_blank" rel="noopener noreferrer" className="">
                <img src="./icon/twitter-circle-filled.svg" className="" title="Twitter Profile" alt="Twitter Profile" />
              </a>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/biade_digital/" target="_blank" rel="noopener noreferrer" className="">
                <img src="./icon/instagram-outlined.svg" className="" title="Instagram Profile" alt="Instagram Profile" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}