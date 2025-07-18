import React from "react";
import './Footer.css'
// import {faGithub} from "@fortawesome/fontawesome-free-brands";


function Footer()
{
  return (
    <div className="Footer">
      <p className="p">Designed by <a href="https://github.com/BenjaminMichaelis" target="_blank" rel="noopener noreferrer">Benjamin Michaelis</a></p>
      {/* <p className="p">Source Code: <a href="https://github.com/BenjaminMichaelis/GraphSketchpad">https://github.com/BenjaminMichaelis/GraphSketchpad</a></p> */}
            <span className="span">
                <a href="https://github.com/BenjaminMichaelis/GraphSketchpad" target="_blank" rel="noopener noreferrer">
                    <div className="link">
                        <i className="fab fa-github"></i>
                    </div>
                </a>
            </span>
    </div>
  );
}

export default Footer;