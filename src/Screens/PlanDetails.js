import React from 'react'
import './PlanDetails.css';
import Swal from 'sweetalert2';
function 
PlanDetails() {

    const subscribe = () => {  //to display sweetalert 
        Swal.fire({  
           // title: 'Oops',  
           background:"black",
           color:'#fff',
            text: 'You can change the plan once the existing plan has been expired.',
            position: 'top',
           showConfirmButton:false,
            timer: 1500,
            
            //icon: 'success'
            // confirmButtonColor:'red',
          }); 
    }
    
    return (
        <div className="planDetails__info">
        {/*<p>Renewal date: 04/11/2023</p>*/}
        <div className="planDetail">
        <label><p>Netflix Standard</p> <p>1080p</p></label>
        <button onClick={subscribe} className="planDetails__button">Subscribe</button>
        </div>
        <div className="planDetail">
        <label><p>Netflix Basic</p> <p>480p</p></label>
        <button onClick={subscribe} className="planDetails__button">Subscribe</button>
        </div>
        <div className="planDetail">
        <label><p>Netflix Premium</p> <p>4K+HDR</p></label>
        <button className="planDetails__selected">Current Package</button>
        </div>
        
        </div>
    )
}

export default PlanDetails
