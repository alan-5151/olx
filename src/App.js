import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import { Template } from "./components/MainComponents";
import Header from "./components/partials/Header/";
import Footer from "./components/partials/Footer/";

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const matDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, matDispatchToProps)(Page);
