import React from "react";

import data from "./data";
import Card from './Card';
// {cardElement}

export default function Portfolio() {
  const cardElement = data.map(
    cardEl => (
      <Card 
          key={cardEl.id}
          title={cardEl.title}
          description={cardEl.description}
          image={cardEl.image}
          type={cardEl.type}
          url={cardEl.url}
        />
    )
  )
  return (
  
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="title">
            <div className="row">
              <div className="col-5 aos-init" data-aos="zoom-in" title="Our Recent Project Section">
                <h4 className="aos-init" data-aos="zoom-in">
                  Our Recent Project
                </h4>
              </div>
              <span className="col-7 d-flex align-items-end product-control os-init" data-aos="zoom-in" title="Carousel Control Section">
                <img src="./icon/Arrow left.svg" className="me-2 ms-auto img-fluid" title="Carousel Control left" alt="" type="button" data-bs-target="#productCarousel" data-bs-slide="prev" />
                <img src="./icon/Arrow right.svg" className="img-fluid" title="Carousel Control right" alt="" type="button" data-bs-target="#productCarousel" data-bs-slide="next" />
              </span>
            </div>
                <div className="row row-cols-2 row-cols-md-2 g-4 g-md-3 mt-5 aos-init aos-animate" data-aos="fade-right">
                  {cardElement}  
                </div>
          </div>
        </div>
      </div>
    </section>

  )
}