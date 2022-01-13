import { onSnapshot, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext'
import { db } from '../firebase'
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

   // const [riders, setRiders] = useState([])

   // useEffect(
   //    () =>
   //       onSnapshot(collection(db, 'riders'), (snapshot) => {
   //          setRiders(snapshot.docs.map((doc) => doc.data()))
   //       }),
   //    []
   // )

   return (
      <>
         <Riders />
      </>
   )
}

export default Home
