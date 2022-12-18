import React from "react"

export default function Card(props) {
 
  return (

    <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate" data-aos="fade-right">
      <a href={props.url} className="text-decoration-none text-light aos-init aos-animate" data-aos="fade-right">
        <div className="card bg-dark border-dark text-light w-100 aos-init aos-animate" data-aos="fade-right" id="card">
          <img src={props.image} className="card-img product-img aos-init aos-animate" data-aos="fade-right" alt={props.title} />
          <div className="desc aos-init aos-animate" data-aos="fade-right">
            <div className="card-text bg-dark border-dark rounded-bottom d-flex aos-init aos-animate" data-aos="fade-right">
              <div className="mt-auto p-3 aos-init aos-animate" data-aos="fade-right">
                <div className="card-text aos-init aos-animate" data-aos="fade-right">
                  <h5 className="mb-0 aos-init aos-animate" data-aos="fade-right">
                    {props.title}
                    <i className="bi bi-box-arrow-up-right h6 d-none icon-link  aos-init aos-animate" data-aos="fade-right" />
                  </h5>
                  <p className="mt-0 aos-init aos-animate" data-aos="fade-right">
                    {props.type}
                  </p>
                </div>
                <div className="card-text desc-hide d-none pb-5  aos-init aos-animate" data-aos="fade-right">
                  <div className="row aos-init aos-animate" data-aos="fade-right">
                    <div className="col-10 aos-init aos-animate" data-aos="fade-right">
                      <p className=" aos-init aos-animate" data-aos="fade-right">
                        {props.description}
                      </p>
                    </div>
                    <div className="col-2  aos-init aos-animate" data-aos="fade-right">

                      {`${props.html}` && <i className="fa-brands fa-html5  aos-init aos-animate" data-aos="fade-right"></i>}
                      {`${props.css}` && <i className="fa-brands fa-css3  aos-init aos-animate" data-aos="fade-right"></i>}
                      {`${props.js}` && <i className="fa-brands fa-js  aos-init aos-animate" data-aos="fade-right"></i>}
                      {`${props.rt}` && <i className="fa-brands fa-react  aos-init aos-animate" data-aos="fade-right"></i>}
                      {`${props.php}` && <i className="fa-brands fa-php  aos-init aos-animate" data-aos="fade-right"></i>}
                      {`${props.wp}` && <i className="fa-brands fa-wordpress  aos-init aos-animate" data-aos="fade-right"></i>}
                      {`${props.git}` && <i className="fa-brands fa-github  aos-init aos-animate" data-aos="fade-right"></i>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

  )
}