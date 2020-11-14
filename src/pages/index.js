import React from "react"

import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <Link to="/about/">Contact</Link>
      <br />
      <Link to="/search">Search</Link>
    </div>
  );
}