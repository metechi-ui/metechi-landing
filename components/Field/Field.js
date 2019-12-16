import React, { useState } from "react";
import classnames from "classnames";

const Field = ({ label, placeholder, type, options, required, name }) => {
  const [value, setValue] = useState("");
  const [focused, setFocus] = useState(false);

  const newClassName = classnames("field", type, {
    required: required,
    focused: focused,
    active: value.length > 0
  });

  const focus = () => {
    setFocus(true);
  };
  const blur = () => {
    setFocus(false);
  };
  const change = e => {
    setValue(e.target.value);
  };

  return (
    <div className={newClassName}>
      {type !== "select" && type !== "textarea" && (
        <input
          required={required}
          value={value}
          name={name}
          id={name}
          onBlur={blur}
          onFocus={focus}
          onChange={change}
          placeholder={placeholder}
          type={type}
        />
      )}
      {type === "select" && (
        <select
          required={required}
          value={value}
          name={name}
          id={name}
          onBlur={blur}
          onFocus={focus}
          onChange={change}
        >
          <option />
          {options &&
            options.length > 0 &&
            options.map((option, index) => {
              return <option key={option + "-" + index}>{option}</option>;
            })}
        </select>
      )}
      {type === "select" && <i className="icon" />}

      {type === "textarea" && (
        <textarea
          required={required}
          value={value}
          name={name}
          id={name}
          onBlur={blur}
          onFocus={focus}
          onChange={change}
          placeholder={placeholder}
        ></textarea>
      )}

      <label htmlFor={name}>
        {required && <span className={"req"}>*</span>}
        {label}
      </label>
    </div>
  );
};

export default Field;
