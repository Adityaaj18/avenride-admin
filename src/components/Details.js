import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../firebase'
import { onSnapshot, collection, where, query } from 'firebase/firestore'
import Update from './Update'
import UpdateBankDetails from './UpdateBankDetails'
import UpdateVehicle from './UpdateVehicle'

const Details = () => {
   const { id } = useParams()

   const [userDetail, setUserDetails] = useState([])
   const [editBox1, setEditBox1] = useState(false)
   const [editBox2, setEditBox2] = useState(false)
   const [editBox3, setEditBox3] = useState(false)
   const [isActive, setIsActive] = useState(false)

   const buttonText = isActive ? 'Active' : 'Deactive'

   const buttonClass = isActive ? 'btn btn-success' : 'btn btn-danger'

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
      <>
         <div className="container-main">
            <div className="card container1 ">
               {userDetail.map((user, index) => {
                  return (
                     <div key={index}>
                        {editBox1 ? (
                           <Update user={user} setEditBox1={setEditBox1} />
                        ) : (
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

                              <div className="buttons">
                                 <button
                                    onClick={() => setEditBox1(true)}
                                    className="btn btn-primary  update-btn"
                                 >
                                    Update
                                 </button>

                                 <a
                                    href="#"
                                    className="btn btn-warning aproove"
                                 >
                                    Aproove
                                 </a>
                              </div>
                              {isActive ? (
                                 <Link to={`/qrcode/${user.id}`}>
                                    <button
                                       type="button"
                                       className="btn btn-dark"
                                    >
                                       Generate QR Code
                                    </button>
                                 </Link>
                              ) : null}
                           </div>
                        )}
                     </div>
                  )
               })}
            </div>

            <div className="container2 ">
               {userDetail.map((user, index) => {
                  return (
                     <div key={index}>
                        {editBox2 ? (
                           <UpdateBankDetails
                              user={user}
                              setEditBox2={setEditBox2}
                           />
                        ) : (
                           <div className="card">
                              <div className="card-header">
                                 Bank Account Details
                              </div>
                              <div className="card-body">
                                 <h5>
                                    Acc holder name:- {user.accountHolderName}{' '}
                                 </h5>
                                 <h5>Acc Number:- {user.accountNumber}</h5>
                                 <h5>Bank Name:- {user.bankName} </h5>
                                 <h5>IFSC Code:- {user.swiftIFSCCode} </h5>
                                 <h5>Bank Docs:- {user.bankdocs}</h5>

                                 <button
                                    onClick={() => setEditBox2(true)}
                                    className="btn btn-primary  update-btn"
                                 >
                                    Update
                                 </button>

                                 <a
                                    href="#"
                                    className="btn btn-warning aproove"
                                 >
                                    Aproove
                                 </a>
                              </div>
                           </div>
                        )}
                     </div>
                  )
               })}

               <div>
                  {userDetail.map((user, index) => {
                     return (
                        <div key={index}>
                           {editBox3 ? (
                              <UpdateVehicle
                                 user={user}
                                 setEditBox3={setEditBox3}
                              />
                           ) : (
                              <div className="card">
                                 <div className="card-header">
                                    Vehicle Details
                                 </div>
                                 <div className="card-body">
                                    <h5>Brand Name:- {user.brand}</h5>
                                    <h5>Model:- {user.model}</h5>
                                    <h5>Number Plate:- {user.numberPlate} </h5>
                                    <h5>Vehicle Type:- {user.serviceType} </h5>
                                    <h5>
                                       Vehicle Color:- {user.vehicleColor}{' '}
                                    </h5>
                                    <h5>Vehicle Docs:- {user.vehicledocs}</h5>

                                    <button
                                       onClick={() => setEditBox3(true)}
                                       className="btn btn-primary  update-btn"
                                    >
                                       Update
                                    </button>

                                    <a
                                       href="#"
                                       className="btn btn-warning aproove"
                                    >
                                       Aproove
                                    </a>
                                 </div>
                              </div>
                           )}
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
         <div className="active-btn">
            <button
               onClick={() => setIsActive(!isActive)}
               type="button"
               className={buttonClass}
            >
               {buttonText}
            </button>
         </div>
      </>
   )
}

export default Details
