import {
    Navigate,
  } from "react-router-dom";
  
  function Protected(props) {
    const { component: Component } = props;
  
    if (!isLoggedIn()) {
      return <Navigate to="/" />;
    }
  
    return <Component />;
  }
  
  function isLoggedIn() {
    return true; // TO-DO: Check session
  }
  
  export default Protected;