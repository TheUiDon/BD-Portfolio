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
              <div className="col-12 aos-init" data-aos="zoom-in" title="Our Recent Project Section">
                <h4 className="aos-init" data-aos="zoom-in">
                  Our Recent Project
                </h4>
              </div>
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