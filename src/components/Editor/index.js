import React, { useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/elegant.css";
import "codemirror/theme/idea.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/night.css";
import "codemirror/theme/twilight.css";
import "codemirror/theme/zenburn.css";
import "codemirror/theme/neat.css";
import "codemirror/theme/eclipse.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "../../assets/css/editor.scss";

import { Controlled } from "react-codemirror2";
import { useSelector } from "react-redux";

function Editor(props) {
  const [expand, setExpand] = useState(true);
  const layout = useSelector((state) => state.layout);

  return (
    <div className={`editor ${expand ? "" : layout.view + "-collapsed"}`}>
      <div className="editor-title text-white">
        <h3>
          {props.langIcon} {props.displayName}
          &nbsp;
          {["top", "bottom"].includes(layout.view) && (
            <BsArrowsAngleExpand
              className="extend-btn"
              onClick={() => {
                setExpand((prev) => !prev);
              }}
            />
          )}
        </h3>
      </div>
      <Controlled
        onBeforeChange={(editor, data, value) => {
          props.onChange(value);
        }}
        value={props.value}
        className="code-section"
        options={{
          lineWrapping: true,
          lint: true,
          mode: props.language,
          theme: layout.theme,
          lineNumbers: true,
          autocorrect: true,
        }}
      />
    </div>
  );
}

export default Editor;
