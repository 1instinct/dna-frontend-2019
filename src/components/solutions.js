import React from "react";
import { connect } from "react-redux";

// eslint-disable-next-line react/prop-types
const Solutions = ({ category }) => {
  return <h1>Solutions Page - {category && category}</h1>;
};

const mapStateToProps = ({ location }) => {
  return {
    category: location.payload.category
  };
};

export default connect(mapStateToProps)(Solutions);
