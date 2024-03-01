import React from "react";
import Homeforseller from "../dashboard/homeforseller";
import Sidebarforseller from "../dashboard/sidebarforseller";
import { useState } from "react";
import "bootstrap/js/dist/dropdown";

import "bootstrap/js/dist/collapse";




function App() {    const [toggle, setToggle] = useState(true)   
   const Toggle = () => {        setToggle(!toggle)    }  
   return (    <div className='container-fluid bg-secondary min-vh-100 '>        <div className='row '>            {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>                <Sidebarforseller />            </div>}            {toggle &&  <div className='col-4 col-md-2'></div>}            <div className='col'>                <Homeforseller Toggle={Toggle}/>            </div>        </div>    </div>  )}
export default App


