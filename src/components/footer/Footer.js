import { Outlet, Link, useLocation } from "react-router-dom";
const Footer=() => {
    return (
        <>
      <div>
        <h2>Footer</h2>
        <p>List of Products goes here.</p>
      </div>
      <Outlet />
      </>
      
    )
  };
  
  export default Footer;