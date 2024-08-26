import React from 'react';
import chickenImg from '/home/rizon/Desktop/GoFood/frontend/src/assets/chicken.jpg';
import momosImg from '/home/rizon/Desktop/GoFood/frontend/src/assets/momos.jpg';
import burgerImg from '/home/rizon/Desktop/GoFood/frontend/src/assets/burger.jpg';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
          <div className='carousel-caption' style={{zIndex:"10"}}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-succcess" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img alt="burger" src={burgerImg} className="d-block w-100 h-100" style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img src={momosImg} className="d-block w-100" alt="momos" style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img src={chickenImg} className="d-block w-100" alt="chicken" style={{ filter: "brightness(30%)" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
