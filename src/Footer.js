import React from "react";
import './Footer.css'
import {faGithub} from "@fortawesome/fontawesome-free-brands";


function Footer()
{
  return (
    <div class="Footer">
      <p class="p">Designed by <a href="https://github.com/BenjaminMichaelis" target="_blank" rel="noopener noreferrer">Benjamin Michaelis</a></p>
      {/* <p class="p">Source Code: <a href="https://github.com/BenjaminMichaelis/GraphSketchpad">https://github.com/BenjaminMichaelis/GraphSketchpad</a></p> */}
            <span class="span">
                <a href="https://github.com/BenjaminMichaelis/GraphSketchpad" target="_blank" rel="noopener noreferrer">
                    <div class="link">
                        <i class="fab fa-github"></i>
                    </div>
                </a>
            </span>
    </div>
  );
}

export default Footer;