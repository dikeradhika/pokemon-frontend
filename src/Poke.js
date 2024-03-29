import React from 'react'

export default function Poke(values) {
  return (
    <div>
    <img src={values.url} alt="" />
    <h3>{values.name}</h3>
  </div>
  )
}
