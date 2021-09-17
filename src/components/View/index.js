import React from "react";
import { Button } from "@material-ui/core";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setView } from "../../actions";

function View(props) {
  const dispatch = useDispatch();
  return (
    <div className="fixed">
      <div className="theme-container">
        <h3 className="theme-title">
          Change View
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
          {["left", "right", "top", "bottom"].map((name) => (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(setView(name));
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

export default View;
