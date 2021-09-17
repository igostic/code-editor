import React, { useState } from "react";
import Layout from "../../components/Layout";
import Editor from "../../components/Editor";
import { DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import { setHtml, setCss, setJs } from "../../actions";

function Home(props) {
  const { view } = useSelector((state) => state.layout);
  const code = useSelector((state) => state.code);
  const [html, setStateHtml] = useState("");
  const [css, setStateCss] = useState("");
  const [js, setStateJs] = useState("");

  const dispatch = useDispatch();

  const srcDoc = `
  <html>
    <head>
      <style>
        ${code.css}
      </style>
    </head>
      <body>
        ${code.html}
        <script>
        ${code.js}
        </script>
      </body>
  </html>`;
  return (
    <Layout>
      <div className={`app-content ${view}`}>
        <div className="editors">
          <Editor
            displayName="HTML"
            language="xml"
            langIcon={<DiHtml5 />}
            value={html}
            onChange={(val) => {
              dispatch(setHtml(val));
              setStateHtml(val);
            }}
          />
          <Editor
            displayName="CSS"
            language="css"
            langIcon={<DiCss3 />}
            value={css}
            onChange={(val) => {
              dispatch(setCss(val));
              setStateCss(val);
            }}
          />
          <Editor
            displayName="JS"
            language="javascript"
            langIcon={<DiJavascript />}
            value={js}
            onChange={(val) => {
              dispatch(setJs(val));
              setStateJs(val);
            }}
          />
        </div>
        <div className="output">
          <iframe
            srcDoc={srcDoc}
            width="100%"
            height="100%"
            title="output"
            sandbox="allow-scripts"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
