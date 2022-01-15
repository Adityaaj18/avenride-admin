import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import Riders from './Riders'

function Home() {
   const { user, logOut } = useUserAuth()
   const handleLogout = async () => {
      try {
         await logOut()
      } catch (err) {
         console.log(err.message)
      }
   }

   return (
      <>
         <Riders />
      </>
   )
}

export default Home
