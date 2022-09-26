import React from "react";
import { connect } from "react-redux";

const LearnDetails = (props) => {
  return (
    <div>
      <h1>{props.link}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(state)
  let id = ownProps.match.params.link_id
  return {
    link: state.links.find(link => link.id === id)
  }

}

export default connect(mapStateToProps)(LearnDetails);
