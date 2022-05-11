import React from 'react'
import "./ReviewCard.css";
const ReviewCard = ({image,name,location,comment}) => {
  return (
    <div className="review-card">
        <div className="card-header">
        <div className="image-container">
          <img src={image} alt="avatar" />
        </div>
        <div className="name-container">
        <h3>{name}</h3> 
        <div className="location-container">
          <p>{location}</p>
        </div>
        </div>
        </div>
        <div className="card-body">
          <p>{comment}</p>
        </div>
    </div>
  )
}

export default ReviewCard