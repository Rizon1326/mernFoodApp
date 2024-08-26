import React from 'react'
import cardImg from '/home/rizon/Desktop/GoFood/frontend/src/assets/card.jpg';


export default function Card() {
  return (
    <div>
    <div>
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
    <img alt="burger" src={cardImg} className="d-block w-100" style={{ filter: "brightness(70%)" }} />
    <div className="card-body">
        <h5 className="card-title">Turkey Kabab</h5>
        <p className="card-text">Istanbul's best kabab recipe</p>
        <div className="container w-100">
          <select className='m-2 h-100 bg-success rounded'>
             {Array.from(Array(6),(e,i)=>{
                   return(
                <option key={i+1} value={i+1}> {i+1}</option>
              )
             })}
          </select>
         <select  className='m-2 h-100  bg-success rounded'>
           <option value="half">Half</option>
           <option value="full">Full</option>
           
         </select>
         <div className='d-inline h-100'>Total Price</div>

        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
