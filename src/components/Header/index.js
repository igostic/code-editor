import React, { useState } from "react";
import { IoRocketSharp } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { GrView } from "react-icons/gr";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../Theme";
import View from "../View";
import "../../assets/css/header.scss";
import { useSelector } from "react-redux";

const useStyles = makeStyles((elem) => ({
  root: {
    "& > *": {
      marginRight: elem.spacing(1),
    },
  },
}));

function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [themeFlag, setThemeFlag] = useState(false);
  const [viewFlag, setViewFlag] = useState(false);
  const styles = useStyles();
  const { html, css, js } = useSelector((state) => state.code);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = (e) => {
    setAnchorEl(null);
  };

  const renderSelectTheme = () => {
    closeMenu();
    setThemeFlag(true);
  };

  const renderSelectView = () => {
    closeMenu();
    setViewFlag(true);
  };
  //save three different files for html, css and js

  const saveCode = () => {
    const code = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>`;
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/html;charset=utf-8," + encodeURIComponent(code)
    );
    element.setAttribute("download", "codeFromCodepen.html");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <>
      <div className="header">
        <div className="header-title">
          <h2>
            <IoRocketSharp /> Roc8 Editor
          </h2>
        </div>

        <div className={`header-right-menu ${styles.root}`}>
          <Button
            variant="contained"
            // className="header-button"
            onClick={saveCode}
          >
            <BsDownload />
            &nbsp;Save
          </Button>
          <Button
            aria-controls="menu"
            aria-haspopup="true"
            onClick={openMenu}
            variant="contained"
            // className="header-button"
          >
            <FiSettings /> &nbsp;Settings
          </Button>
          <Menu
            id="menu"
            keepMounted
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
            PaperProps={{
              style: {
                width: "125px",
              },
            }}
          >
            <MenuItem onClick={renderSelectTheme}>
              <HiOutlineViewGridAdd /> &nbsp;Theme
            </MenuItem>
            <MenuItem onClick={renderSelectView}>
              <GrView /> &nbsp; View
            </MenuItem>
          </Menu>
        </div>
      </div>

      {themeFlag && <Theme close={setThemeFlag} />}
      {viewFlag && <View close={setViewFlag} />}
    </>
  );
}

export default Header;
