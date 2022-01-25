import React, { useState } from 'react'
import { db } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'

function UpdateBankDetails({ user, setEditBox2 }) {
   const [accHolderName, setAccHolderName] = useState(user.accountHolderName)
   const [accNumber, setAccNumber] = useState(user.accountNumber)
   const [bankName, setBankBname] = useState(user.bankName)
   const [ifscCode, setIfcsCode] = useState(user.swiftIFSCCode)
   const [bankDocs, setBankDocs] = useState(user.bankdocs)

   const ref = doc(db, 'riders', user.id)

   function editDoc() {
      updateDoc(ref, {
         accountHolderName: accHolderName,
         accountNumber: accNumber,
         bankName: bankName,
         swiftIFSCCode: ifscCode,
         bankdocs: bankDocs
      })
   }

   return (
      <div className="form2">
         <p>Edit Bank account Details</p>
         <div className="form-group">
            <input
               className="form-input"
               type="text"
               value={accHolderName}
               onChange={(e) => setAccHolderName(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={accNumber}
               type="text"
               onChange={(e) => setAccNumber(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={bankName}
               type="text"
               onChange={(e) => setBankBname(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={ifscCode}
               type="text"
               onChange={(e) => setIfcsCode(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={bankDocs}
               type="text"
               onChange={(e) => setBankDocs(e.target.value)}
            />
         </div>
         <button
            className="btn btn-success update-form1"
            onClick={() => {
               editDoc()
               setEditBox2(false)
            }}
         >
            update
         </button>
         <button
            className="btn btn-danger cancel-form1"
            onClick={() => {
               setEditBox2(false)
            }}
         >
            Cancel
         </button>
      </div>
   )
}

export default UpdateBankDetails
