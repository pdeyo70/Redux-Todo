import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
    console.log(state);
    return {
      //state to connect (map) to props goes here
    };
  };
  
  export default connect(
    mapStateToProps,
    { /* action creator function(s) go here */ } // same as { updateTitle: updateTitle }
  )(Todos);