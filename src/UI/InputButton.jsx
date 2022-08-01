import { Fragment } from "react";
import "../css/style.css";

const InputButton = (props) => {
  return (
    <Fragment>
      <button
        type="button"
        value={props.value}
        className="button"
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </Fragment>
  );
};

export default InputButton;
