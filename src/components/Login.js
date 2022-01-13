import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { useUserAuth } from '../context/UserAuthContext'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const { logIn, googleSignIn, user } = useUserAuth()
   const navigate = useNavigate()

   // const handleSubmit = async (e) => {
   //    e.preventDefault()
   //    setError('')
   //    try {
   //       await logIn(email, password)
   //       navigate('/home')
   //    } catch (err) {
   //       setError(err.message)
   //    }
   // }

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
