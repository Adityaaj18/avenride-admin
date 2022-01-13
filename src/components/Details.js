import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
   const { id } = useParams()
   return (
      <div className="container-main">
         <div className="card container1 ">
            <img
               className="card-img-top"
               src="https://img.icons8.com/color/48/000000/gender-neutral-user.png"
               alt="Rider Image"
            />
            <div className="card-body">
               <h2 className="card-title">Profile</h2>
               <h5>Name: john doe</h5>
               <h5>Contact: 4654398</h5>
               <h5>Id: 4654398</h5>
               <h5>Email: jim@gmail.com</h5>
               <h5>Personal Docs: pending</h5>
               <a href="#" className="btn btn-warning aproove">
                  Aproove
               </a>
            </div>
         </div>

         <div className="container2">
            <div class="card">
               <div class="card-header">Bank Account Details</div>
               <div class="card-body">
                  <h5 class="card-title">Acc holder name: name</h5>
                  <h5 class="card-title">Account number: 1232</h5>
                  <h5 class="card-title">Bank name: Access</h5>
                  <h5 class="card-title">IFSC: aguadio</h5>
                  <h5 class="card-title">Bank Documents: Pending</h5>

                  <a href="#" class="btn btn-warning aproove">
                     Aproove
                  </a>
               </div>
            </div>

            <div class="card">
               <div class="card-header">Vehicle Details</div>
               <div class="card-body">
                  <h5 class="card-title">Brand: brandname</h5>
                  <h5 class="card-title">Model: swift</h5>
                  <h5 class="card-title">Service type: -</h5>
                  <h5 class="card-title">Vehicle color: -</h5>

                  <a href="#" class="btn btn-warning aproove">
                     Aproove
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Details
