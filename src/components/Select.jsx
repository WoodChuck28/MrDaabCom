import React from "react"

/*Select.jsx*/

const Select = (props) => {
    return(
        <div className="form-group">
            <label style={{width: "200px"}} htmlFor={props.name}> {props.title} </label>
            <select
              name={props.name}
              value={props.value}
              onChange={props.handleChange}
              >
              <option value="" disabled>{props.placeholder}</option>
              {props.options.map(option => {
                return (
                  <option
                    key={option}
                    value={option}
                    label={option}>{option}
                  </option>
                );
              })}
            </select>
      </div>)
}

export default Select;