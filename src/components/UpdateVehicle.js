import React, { useState } from 'react'
import { db } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'

function UpdateVehicle({ user, setEditBox3 }) {
   const [brandName, setBrandName] = useState(user.brand)
   const [model, setModel] = useState(user.model)
   const [numberPlate, setNumberPlate] = useState(user.numberPlate)
   const [serviceType, setServiceType] = useState(user.serviceType)
   const [vehicleColor, setVehicleColor] = useState(user.vehicleColor)
   const [vehicleDocs, setVehicleDocs] = useState(user.vehicledocs)

   const ref = doc(db, 'riders', user.id)

   function editDoc() {
      updateDoc(ref, {
         brand: brandName,
         model: model,
         numberPlate: numberPlate,
         serviceType: serviceType,
         vehicleColor: vehicleColor,
         vehicledocs: vehicleDocs
      })
   }

   return (
      <div className="form3">
         <label>Edit Vehicle Details</label>
         <div className="form-group">
            <input
               className="form-input"
               type="text"
               value={brandName}
               onChange={(e) => setBrandName(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={model}
               type="text"
               onChange={(e) => setModel(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={numberPlate}
               type="text"
               onChange={(e) => setNumberPlate(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={serviceType}
               type="text"
               onChange={(e) => setServiceType(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={vehicleColor}
               type="text"
               onChange={(e) => setVehicleColor(e.target.value)}
            />
         </div>
         <div className="form-group">
            <input
               className="form-input"
               value={vehicleDocs}
               type="text"
               onChange={(e) => setVehicleDocs(e.target.value)}
            />
         </div>
         <button
            className=" btn btn-success update-form1"
            onClick={() => {
               editDoc()
               setEditBox3(false)
            }}
         >
            update
         </button>
         <button
            className="btn btn-danger cancel-form1"
            onClick={() => {
               setEditBox3(false)
            }}
         >
            Cancel
         </button>
      </div>
   )
}

export default UpdateVehicle
