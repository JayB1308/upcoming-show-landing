import React from 'react'
import "./Label.css";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineCalendar} from "react-icons/ai"
const Label = () => {
  return (
    <div className="label">
        <div className="label-container">
            <div className="label-cards">
                <AiOutlineHeart className='label-icons'/>
                <h6 className='label-number'>0</h6>
                <p>Label</p>
            </div>
            <div className="label-cards">
                <AiOutlineCalendar className='label-icons'/>
                <h6 className='label-number'>0</h6>
                <p>Label</p>
            </div>
            <div className="label-cards">
                <AiOutlineCalendar className='label-icons'/>
                <h6 className='label-number'>0</h6>
                <p>Label</p>
            </div>
            <div className="label-cards">
                <AiOutlineCalendar className='label-icons'/>
                <h6 className='label-number'>0</h6>
                <p>Label</p>
            </div>
        </div>
    </div>
  )
}

export default Label