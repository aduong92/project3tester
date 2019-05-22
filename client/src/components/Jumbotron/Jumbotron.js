//The Jumbotron component info
import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children }) {
	return (
	  <div
		style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
		className="jumbotron"
	  >
		{children}
	  </div>
	);
  }

export default Jumbotron;
