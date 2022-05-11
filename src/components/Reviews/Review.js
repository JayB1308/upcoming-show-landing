import React from 'react'
import "./Review.css";
import ReviewCard from "./ReviewCard";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { AiOutlineArrowRight } from 'react-icons/ai';
import review1 from "../../images/review-1.png";
import review2 from "../../images/review-2.png";
import review3 from "../../images/review-3.png";
const Review = () => {

  //Array containing the reviews and user avatars
  const reviews =[
    {
      image: review1,
      name:"Helen Jummy",
      location:"Palo Alto,CA",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "
    },
    {
      image: review2,
      name:"Isaac Oluwatemilorun",
      location:"Palo Alto,CA",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "
    },
    {
      image: review3,
      name:"Hellen Jummy",
      location:"Palo Alto,CA",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "
    }
  ]

  return (
   <div className="reviews">
        <div className="header">
            <div className="heading">
                <h2>Reviews</h2>
                <div className="underline"></div>
            </div>
            {/*Pagination Arrows*/}
            <div className="pagination">
              <div className="page-group">
                  <p className='page'><span className='current-page'>1</span>/12</p>
                  <div className="arrows">
                    <AiOutlineArrowLeft className='arrow-icon'/>
                    <AiOutlineArrowRight className='arrow-icon'/>
                  </div>
              </div>
            </div>
        </div>
        <div className="review-container">
            {
              reviews.map((review) => {
                return(
                  <ReviewCard image={review.image} name={review.name} location={review.location} comment={review.review} />
                )
              })
            }
        </div>
   </div>
  )
}

export default Review