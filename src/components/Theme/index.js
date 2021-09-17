import { Button } from "@material-ui/core";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setTheme } from "../../actions";
import "../../assets/css/theme.scss";

function Theme(props) {
  const dispatch = useDispatch();

  return (
    <div className="fixed">
      <div className="theme-container">
        <h3 className="theme-title">
          Change Theme
          <Button
            onClick={() => {
              props.close(false);
            }}
            style={{
              padding: "0.5rem",
              fontSize: "1.5rem",
              width: "2.5rem",
              height: "2.5rem",
              float: "right",
            }}
          >
            <AiOutlineClose />
          </Button>
        </h3>
        <div className="theme-names">
          {[
            "blackboard",
            "cobalt",
            "eclipse",
            "elegant",
            "idea",
            "material",
            "mdn-like",
            "midnight",
            "neat",
            "night",
            "twilight",
            "zenburn",
          ].map((name) => (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(setTheme(name));
                props.close(false);
              }}
            >
              {name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Theme;
