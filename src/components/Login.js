import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { useUserAuth } from '../context/UserAuthContext'
import { useParams } from 'react-router-dom'
import { onSnapshot, collection, where, query } from 'firebase/firestore'
import { db } from '../firebase'

const Login = () => {
   const [error, setError] = useState('')
   const { googleSignIn, user } = useUserAuth()
   const navigate = useNavigate()

   const { id } = useParams()

   const [userDetail, setUserDetails] = useState([])

   const colRef = collection(db, 'users')

   const q = query(colRef, where('admin', '==', true))

   useEffect(
      () =>
         onSnapshot(q, (snapshot) => {
            console.log(snapshot.docs.map((doc) => doc.data().name))
            setUserDetails(snapshot.docs.map((doc) => doc.data()))
         }),
      []
   )

   const isAdmin = userDetail.map((user) => user.admin)

   console.log(userDetail.map((user) => user.admin))

   const handleGoogleSignIn = async (e) => {
      e.preventDefault()
      try {
         await googleSignIn()
         //firebase qurey for if its admin or not

         navigate('/home')
         console.log(user.displayName)
         console.log(user.uid)
      } catch (err) {
         setError(err.message)
      }
   }

   return (
      <>
         <div className="avenride-login">
            <div className="card login-card">
               <h2 className="mb-3">Avenride</h2>
               {error && <Alert variant="danger">{error}</Alert>}

               <div>
                  <GoogleButton
                     className="g-btn"
                     type="dark"
                     onClick={handleGoogleSignIn}
                  />
               </div>
            </div>
         </div>
      </>
   )
}

export default Login
