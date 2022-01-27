import { onSnapshot, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { db } from '../firebase'
import { Routes, Route, Link, useParams } from 'react-router-dom'

function Riders() {
   const { user } = useUserAuth()

   const [riders, setRiders] = useState([])

   //console.log(riders.map((rider) => rider.alldocs))

   useEffect(
      () =>
         onSnapshot(collection(db, 'riders'), (snapshot) => {
            setRiders(snapshot.docs.map((doc) => doc.data()))
         }),
      []
   )

   return (
      <>
         <div className="riders">
            <h1>All Riders</h1>
            <div className="riders-list">
               <ul className="list-group">
                  {riders.map((rider, index) => (
                     <div key={index} className="rider">
                        <Link to={`/details/${rider.id}`}>
                           <li
                              key={rider.id}
                              className="list-group-item d-flex justify-content-between align-items-center"
                           >
                              {rider.name}
                              <p id="unverified">Unverified</p>
                           </li>
                        </Link>
                     </div>
                  ))}
               </ul>
            </div>
         </div>
      </>
   )
}

export default Riders
