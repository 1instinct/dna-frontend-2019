/* global process */
/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../actions/auth";
import styled from "styled-components";

const Container = styled.div`
  background-color: lime;
`;

const About = ({ loggedIn, _login, page }) => {
  // eslint-disable-next-line no-console
  console.log(process.env.DB_PASS);
  return (
    <Container>
      <div>About PAGE is logged in = {loggedIn ? page : "false"}</div>
      <div onClick={() => _login("max@max.com", "yeah")}>LOG IN</div>
    </Container>
  );
};

const mapStateToProps = ({ auth: { loggedIn }, page }) => ({
  loggedIn,
  page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _login: login
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
