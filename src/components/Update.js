import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import fireDb from '../firebase'
import { useParams } from 'react-router-dom'

function Update() {
   const [state, setState] = useState([])
   const [data, setData] = useState({})

   const { name, email } = state

   const { id } = useParams()

   useEffect(() => {
      fireDb.child('riders').on('value', (snapshot) => {
         if (snapshot.val() != null) {
            setData({ ...snapshot.val() })
         } else {
            setData()
         }
      })

      return () => {
         setData({})
      }
   }, [id])

   useEffect(() => {
      if (id) {
         setState({ ...data[id] })
      }
   }, [id, data])

   const handleSubmit = () => {}

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <input
                  className="form-control"
                  id="exampleInputEmail1"
                  value={name}
               />
            </div>
            <div className="form-group">
               <input
                  className="form-control"
                  id="exampleInputPassword1"
                  value={email}
               />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
               Submit
            </button>
         </form>
      </div>
   )
}

export default Update
