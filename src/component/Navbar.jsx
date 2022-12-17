import React from "react"

export default function Navbar() {
  return(
    <header className="animate__animated animate__fadeInDown animate__delay-0.5s">
  <nav className="navbar border-bottom ">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="./img/svg/Logo.svg" title="Biade Digital Logo" alt="Logo" height={25} className="d-inline-block " />
      </a>
      <div className="nav-text ">
        <img src="./icon/envelope.svg" title="Send Mail" className="d-md-none" height={25} alt="Logo" />
        <a href="mailto:contact@biadedigital.com" title="Send Mail" className="d-none d-md-block text-white text-decoration-none text-uppercase">
          Contact@biadedigital.com
        </a>
      </div>
    </div>
  </nav>
</header>
  )
}