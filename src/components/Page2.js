import React from 'react'

function Page2() {
   return (
      <>
         <div className="accordion">
            <h3>Technical Support Using Avenride App </h3>
            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle1"
               />
               <label for="toggle1">
                  Are there receipts available when you book or request a
                  service?
               </label>
               <div className="accordion-content">
                  <p>
                     Tickets(s) / receipts are both available on on your pre
                     confirmation booking screen and you will be emailed one via
                     the email address Avenride has on your file and profile
                     account
                  </p>
               </div>
            </div>

            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle2"
               />
               <label for="toggle2">Where do I find booking details</label>
               <div className="accordion-content">
                  <p>
                     <p>1. Go to Avenride app homepage</p>
                     <p>2. Select my bookings and wait for dropdown</p>
                     <p>
                        3. Select booking details Type(s) to view booking
                        information. If you have any concern(s) please contact
                        the customer service for more supports.
                     </p>
                  </p>
               </div>
            </div>

            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle3"
               />
               <label for="toggle3">Where doI redeem my promotion(s)</label>
               <div className="accordion-content">
                  <p>
                     Avenride promotions are stored in Avenride app. To access
                     redeem yours please select redeem from side menu bar. If
                     you have any more concern(s) please contact the customer
                     service for more supports.
                  </p>
               </div>
            </div>
         </div>
         <div className="anything-else">
            <h3>Can we help with anything else?</h3>
            <a href="/help">Yes</a>
            <a href="/help">No</a>
         </div>
      </>
   )
}

export default Page2
