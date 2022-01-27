import React, { useState } from 'react'
import { db } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'

function Update({ user, setEditBox1 }) {
   const [name, setName] = useState(user.name)
   const [contact, setContact] = useState(user.mobileNo)
   const [email, setEmail] = useState(user.email)
   const [personalDocs, setPersonalDocs] = useState(user.personaldocs)

   const ref = doc(db, 'riders', user.id)
   console.log(typeof user.id)

   // getDocs(ref)
   //    .then((snapshot) => {
   //       console.log(snapshot.docs)
   //    })
   //    .catch((err) => {
   //       console.log(err)
   //    })

   function editDoc() {
      updateDoc(ref, {
         name: name,
         mobileNo: contact,
         email: email,
         personaldocs: personalDocs
      })
   }

   return (
      <div className="form">
         <label>Edit Details</label>
         <div className="form-group">
            <input
               className="form-input"
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={contact}
               type="text"
               onChange={(e) => setContact(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={email}
               type="text"
               onChange={(e) => setEmail(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={personalDocs}
               type="text"
               onChange={(e) => setPersonalDocs(e.target.value)}
            />
         </div>
         <div className="buttons">
            <button
               className="btn btn-success update-form1"
               onClick={() => {
                  editDoc()
                  setEditBox1(false)
               }}
            >
               update
            </button>
            <button
               className="btn btn-danger cancel-form1"
               id="update"
               onClick={() => {
                  setEditBox1(false)
               }}
            >
               Cancel
            </button>
         </div>
      </div>
   )
}

export default Update
