//layout.jsx Luca Distefano 301357231 sept 26,2024


import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/logo.jpg';
export default function Layout() {
 return (
 <>
 < img src={football1}alt="football" className="football" width="50px" height="50px"/>
 <h1>Luca's Portfolio</h1>
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
