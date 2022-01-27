import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
   return (
      <>
         <div className="accordion">
            <h3>Using Avenride App Services</h3>
            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle1"
               />
               <label for="toggle1">How to book an Avenride Car</label>
               <div className="accordion-content">
                  <p>
                     <p>To book an Avenride</p>
                     <p>1. Open Avenride app and tap the Car services</p>
                     <p>
                        2. Enter your pickup and drop-off or choose from save
                        locations
                     </p>
                     <p>3. select payment types</p>
                     <p>4. Confirm your booking </p>
                     <p>5. Register your payments details</p>
                     <p>6. Complete or make a payment</p>
                     <p>7. Wait for driver details and your OTP code</p>
                     <p>8. Please scan driver's bar code on drivers arrival</p>
                     <p>
                        9. Rating screen and add as favourite driver from screen
                     </p>
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
               <label for="toggle2">
                  What Hailable services does Avenride provides?
               </label>
               <div className="accordion-content">
                  <p>
                     "Open the Averide app" Avenride provides services like Car,
                     Keke, Bike, Ambulance, Boat or water transportation and
                     Delivery. Please see our help section on how to use our
                     services
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
               <label for="toggle3">How do I get discounted fares?</label>
               <div className="accordion-content">
                  <p>
                     See the book Join Super User banner on the app home screen
                     or pop-ups find out which discounted fare tickets available
                     to you.
                  </p>
               </div>
            </div>

            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle4"
               />
               <label for="toggle4">
                  How long does my booking takes before it expires and thier
                  refunds?
               </label>
               <div className="accordion-content">
                  <p>
                     Each standard ticket(s) expires at the completion of that
                     trip or also it can last for three months or if no driver
                     accepted and completed your request, if you have any
                     concerns please contact the customer service for more
                     supports.
                  </p>
               </div>
            </div>

            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle5"
               />
               <label for="toggle5">
                  Can I pay for my trip with PayPal, PaySack or bank transfer or
                  setting up a direct debit?
               </label>
               <div className="accordion-content">
                  <p>
                     A direct debit , cash or PayPal is currently acceptable for
                     the payment of fare(s) / trip(s) and this is subject to
                     change, If you have any concern(s) please contact the
                     customer service for more supports.
                  </p>
               </div>
            </div>

            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle6"
               />
               <label for="toggle6">
                  How do I scan driver's bar code to confirm genuineness, super
                  or prime verified drivers users?
               </label>
               <div className="accordion-content">
                  <p>
                     <p>1. Allow driver to reach your pickup location</p>
                     <p>
                        2. Open Avenride pre booking section showing your OTP
                        Code
                     </p>
                     <p>
                        3. Click on the "Scan Driver's Bar Code" and placed bar
                        Code to fit your device scan bar code screen and follow
                        the steps below
                     </p>
                     <p>
                        4. Screen short or share screen details. If you have any
                        more concern(s) please contact the customer service for
                        more supports.
                     </p>
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

export default Page1
