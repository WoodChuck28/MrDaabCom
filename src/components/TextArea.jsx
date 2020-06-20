import React from "react"
import "./styles/TextArea.css"

const TextArea = (props) => {
    return (  
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-input2"
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      columns={props.columns}
      rows={props.rows}
    />
  </div>
)
}

export default TextArea;