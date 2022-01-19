import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import React from 'react'

const Qrcode = () => {
   const { id } = useParams()

   const [src, setSrc] = useState('')

   useEffect(() => {
      QRCode.toDataURL(id).then(setSrc)
   }, [])

   return (
      <div className="text-center">
         <img className="img-thumbnail" src={src} />
         <br />
         <button
            id="print"
            className="btn btn-secondary"
            onClick={() => window.print()}
         >
            <i className="fas fa-print">Print</i>
         </button>
      </div>
   )
}

export default Qrcode
