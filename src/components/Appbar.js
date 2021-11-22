import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useRouteMatch } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

//reference for appbar template : https://material-ui.com/components/app-bar/
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ElevateAppbar(props) {
  const history = props.history;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1275px)",
  });

  return (
    <div>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: "#3b5999", opacity: 0.97 }}>
          <Toolbar>
            <Grid container>
                {
                    isDesktopOrLaptop &&
                    <Grid
                      item
                      xs={12}
                      md={6}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      {" "}
                     
                        <Button
                          onClick={() => history.push(`/`)}
                          style={{ fontSize: 13 }}
                        >
                          ZPOP Admin
                        </Button>
                    </Grid>
                }
              </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}

export default ElevateAppbar;
