import React from "react";
import classnames from "classnames";

const Button = ({
  className,
  style,
  label,
  onClick,
  submit,
  small,
  primary,
  secondary
}) => {
  const newClassName = classnames("button", className, {
    small,
    primary,
    secondary
  });
  return (
    <button
      style={style}
      type={submit ? "submit" : ""}
      value=""
      className={newClassName}
      onClick={onClick}
    >
      <span className={"label"} data-attr={label}>
        {label}
      </span>
    </button>
  );
};

export default Button;
