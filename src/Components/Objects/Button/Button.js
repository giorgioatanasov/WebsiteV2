import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button id={props.id} class={props.class} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  id: "",
  class: "",
};

Button.propTypes = {
  kids: PropTypes.node.isRequired,
};

export default Button;
