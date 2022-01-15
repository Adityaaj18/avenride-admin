import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { onSnapshot, collection, where, query } from 'firebase/firestore'

const Details = () => {
   const { id } = useParams()

   const [userDetail, setUserDetails] = useState([])

   const colRef = collection(db, 'riders')

   const q = query(colRef, where('id', '==', id))

   useEffect(
      () =>
         onSnapshot(q, (snapshot) => {
            setUserDetails(snapshot.docs.map((doc) => doc.data()))
         }),
      []
   )

   return (
      <div className="container-main">
         <div className="card container1 ">
            {userDetail.map((user) => {
               return (
                  <div className="card-body">
                     <img
                        className="card-img-top"
                        src={user.photourl}
                        alt="Rider Image"
                     />
                     <h2 className="card-title">Profile</h2>
                     <h5>Name:- {user.name} </h5>
                     <h5>Contact:- {user.mobileNo}</h5>
                     <h5>Id:- {user.id} </h5>
                     <h5>Email:- {user.email} </h5>
                     <h5>Personal Docs:- {user.personaldocs}</h5>
                     <a href="#" className="btn btn-warning aproove">
                        Aproove
                     </a>
                  </div>
               )
            })}
         </div>

         <div className="container2">
            {userDetail.map((user) => {
               return (
                  <div className="card">
                     <div className="card-header">Bank Account Details</div>
                     <div className="card-body">
                        <h5 className="card-title">
                           Acc holder name:- {user.accountHolderName}
                        </h5>
                        <h5 className="card-title">
                           Account number:- {user.accountNumber}
                        </h5>
                        <h5 className="card-title">
                           Bank name:- {user.bankName}
                        </h5>
                        <h5 className="card-title">
                           IFSC:- {user.swiftIFSCCode}
                        </h5>
                        <h5 className="card-title">
                           Bank Docs:- {user.bankdocs}
                        </h5>
                        <a href="#" className="btn btn-warning aproove">
                           Aproove
                        </a>
                     </div>
                  </div>
               )
            })}

            {userDetail.map((user) => {
               return (
                  <div className="card">
                     <div className="card-header">Vehicle Details</div>
                     <div className="card-body">
                        <h5 className="card-title">Brand: {user.brand} </h5>
                        <h5 className="card-title">Model: {user.model} </h5>
                        <h5 className="card-title">
                           Number Plate:- {user.numberPlate}{' '}
                        </h5>
                        <h5 className="card-title">
                           Service type:- {user.serviceType}{' '}
                        </h5>
                        <h5 className="card-title">
                           Vehicle color:- {user.vehicleColor}{' '}
                        </h5>
                        <h5 className="card-title">
                           Vehicle Docs:- {user.vehicledocs}{' '}
                        </h5>
                        <a href="#" className="btn btn-warning aproove">
                           Aproove
                        </a>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Details
