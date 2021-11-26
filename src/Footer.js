import React from "react";
import './Footer.css'
import {faGithub} from "@fortawesome/fontawesome-free-brands";


function Footer()
{
  return (
    <div class="Footer">
      <p class="p">Copyright @2021 | Designed by <a href="https://github.com/BenjaminMichaelis">Benjamin Michaelis</a></p>
      {/* <p class="p">Source Code: <a href="https://github.com/BenjaminMichaelis/GraphSketchpad">https://github.com/BenjaminMichaelis/GraphSketchpad</a></p> */}
            <span class="span">
                <a href="https://github.com/BenjaminMichaelis/GraphSketchpad">
                    <div class="link">
                        <i class="fab fa-github"></i>
                    </div>
                </a>
            </span>
    </div>
  );
}

export default Footer;