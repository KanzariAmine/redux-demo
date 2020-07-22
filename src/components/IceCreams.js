import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";
function IceCreams(props) {
  return (
    <div>
      <h1>Number of Ice Cream: {props.numOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreams);
