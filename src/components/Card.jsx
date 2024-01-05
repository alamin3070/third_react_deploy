import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img className='w-80 h-48' src={props.cardInfo.imageUrl} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
      {props.cardInfo.name}!
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{props.cardInfo.price}</p>
      <p>{props.cardInfo.des}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
    </>
    
  )
}

export default Card