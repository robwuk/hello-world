import React from "react"
import {Link} from "gatsby"

export default () => (
  <div>
  <h1>Hello Gatsby!</h1>
  <p>What a world</p>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  <Link to="/about/" target="_blank">About</Link>
  <Link to="/contact/">Contact</Link>
  </div>
)
