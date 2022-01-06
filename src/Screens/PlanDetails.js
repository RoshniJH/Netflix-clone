import React from 'react'
import './PlanDetails.css';
function PlanDetails() {
    return (
        <div className="planDetails__info">
        {/*<p>Renewal date: 04/11/2023</p>*/}
        <div className="planDetail">
        <label><p>Netflix Standard</p> <p>720p</p></label>
        <button  className="planDetails__button">Subscribe</button>
        </div>
        <div className="planDetail">
        <label><p>Netflix Basic</p> <p>480p</p></label>
        <button className="planDetails__button">Subscribe</button>
        </div>
        <div className="planDetail">
        <label><p>Netflix Premium</p> <p>1080p</p></label>
        <button className="planDetails__selected">Current Package</button>
        </div>
        
        </div>
    )
}

export default PlanDetails
