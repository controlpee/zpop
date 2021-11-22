import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appbar from "../components/Appbar";
import Home from "../pages/Home";

function MainLayout(props) {
  return (
    <div style={{ background: "#fff" }}>
      <CssBaseline />
      <Appbar />

      <main
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 10,
          minHeight: "calc(100vh)",
        }}
      >
        <Routes>
        <Router>
          <Route exact path={`/`} render={(props) => <Home />} />
        </Router>
        </Routes>
      </main>
    </div>
  );
}

export default (MainLayout);
