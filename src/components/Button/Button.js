import React from "react"
import PropsType from "prop-types"
import "./Button.css"

export default function Button({ label }) {
   return (
      <button className="button">{label}</button>
   )
}

Button.propTypes = {
   label: PropsType.string.isRequired
}