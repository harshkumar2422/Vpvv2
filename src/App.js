import React from "react";
import "./App.css";
import logo from "./logo-vpvv.png"
const App = () => {
  return (
    <>
      <div className="all">
        <div className="card">
          <img src={logo} />
          <div className="Heading">
          <h1> Welcome To The VPVV</h1>
          </div>
          <h3 style={{margin:"0"}}>
        
        <strong> For More Enquiries, kindly Email Us.</strong>   
          </h3>
          <h3 style={{marginTop:"7px"}}>
          Evolve@vpvvglobal.com
          </h3>
        
        </div>
      </div>
    </>
  );
};

export default App;
