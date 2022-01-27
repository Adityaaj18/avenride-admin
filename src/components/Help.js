import React from 'react'
import { Link } from 'react-router-dom'

function Help() {
   return (
      <div className="help-box">
         <Link to={'/help/page1'}>
            <div className="card shadow">
               <div className="card-body">
                  <p>Using Avenride App Services</p>
               </div>
            </div>
         </Link>
         <Link to={'/help/page2'}>
            <div className="card shadow">
               <div className="card-body">
                  <p>Technical Support Using Avenride Services</p>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default Help
