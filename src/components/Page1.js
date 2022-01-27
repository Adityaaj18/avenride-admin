import React, { useState } from 'react'

function Page1() {
   return (
      <>
         <div className="accordion">
            <div className="accordion-tab card">
               <input
                  type="checkbox"
                  className="accordion-toggle"
                  name="toggle"
                  id="toggle1"
               />
               <label for="toggle1">Question 1</label>
               <div className="accordion-content">
                  <p>
                     lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adip
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
               <label for="toggle2">Question 2</label>
               <div className="accordion-content">
                  <p>
                     lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adip
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
               <label for="toggle3">Question 3</label>
               <div className="accordion-content">
                  <p>
                     lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adip
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
               <label for="toggle4">Question 4</label>
               <div className="accordion-content">
                  <p>
                     lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum
                     dolor sit amet, consectetur adiplorem ipsum dolor sit amet,
                     consectetur adiplorem ipsum dolor sit amet, consectetur
                     adip
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}

export default Page1
