import B from "./B";

import React, { useState } from 'react'
export default function A() {
  const [x, setX] = useState("Welcome, this content is from useState")
  return (
    <div>
      <h1>This content is from component A <B name={x}/> </h1>
    </div>
  )
}
