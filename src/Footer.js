import React from "react";
import { connect } from "react-redux";

const Footer = (props) => {
  const isActive = (type) => {
    if (type == props.filter) {
      return { color: "red" };
    }
  };
  const setFilter = (filter) => {
    props.dispatch({ type: "SET_FILTER", filter: filter });
  };
  return (
    <div>
      <h1>Footer</h1>
      <div style={isActive("all")} onClick={() => setFilter("all")}>
        all
      </div>
      <div style={isActive("complete")} onClick={() => setFilter("complete")}>
        complete
      </div>
      <div
        style={isActive("incomplete")}
        onClick={() => setFilter("incomplete")}
      >
        incomplete
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filter };
};
export default connect(mapStateToProps)(Footer);
