import React from 'react'
import "./UpcomingShows.css";
import { shows } from '../../data/upcomingShows';
import {BsArrowRight} from "react-icons/bs";
import {IoTicketSharp} from "react-icons/io5";
const UpcomingShows = () => {
  return (
    <div className="upcoming-shows">
        <div className="upcoming-container">
            <div className="header">
                <div className="heading">
                    <h2>Upcoming Shows</h2>
                    <div className="underline"></div>
                </div>
                <div className="link">View All</div>
            </div>
            <div className="upcoming-cards">
                        <div className="upcoming-card">
                        <div className="card-image">
                            <img src={require("../../images/benny-dayal.png")} alt="artist" />
                        </div>
                        <div className="card-body">
                            <p>Folk</p>
                            <h5>Benny Dayal</h5>
                        </div>
                        <div className="card-footer">
                            <div className="more">
                            <h6>More Info</h6>
                            <BsArrowRight />
                            </div>
                            <IoTicketSharp />
                        </div>
                    </div>
                    <div className="upcoming-card">
                    <div className="card-image">
                        <img src={require("../../images/vijay-yesudata.png")} alt="artist" />
                    </div>
                    <div className="card-body">
                        <p>Bollywood</p>
                        <h5>Vijay Yesudas</h5>
                    </div>
                    <div className="card-footer">
                        <div className="more">
                        <h6>More Info</h6>
                        <BsArrowRight />
                        </div>
                        <IoTicketSharp />
                    </div>
                </div>
                <div className="upcoming-card">
                <div className="card-image">
                    <img src={require("../../images/andrea.png")} alt="artist" />
                </div>
                <div className="card-body">
                    <p>Folk</p>
                    <h5>Andrea Jeremiah</h5>
                </div>
                <div className="card-footer">
                    <div className="more">
                    <h6>More Info</h6>
                    <BsArrowRight />
                    </div>
                    <IoTicketSharp />
                </div>
            </div>
            <div className="upcoming-card">
            <div className="card-image">
                <img src={require("../../images/shipla-rao.png")} alt="artist" />
            </div>
            <div className="card-body">
                <p>Folk</p>
                <h5>Shilpa Rao</h5>
            </div>
            <div className="card-footer">
                <div className="more">
                <h6>More Info</h6>
                <BsArrowRight />
                </div>
                <IoTicketSharp />
            </div>
        </div>
            </div>
        </div>
    </div>
   
  ) 
}

export default UpcomingShows