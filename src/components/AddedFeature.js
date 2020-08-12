import React from 'react';
// import { connect } from 'react-redux'
// import { removeFeature } from '../actions/cartActions'

const AddedFeature = props => {
  // console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={ () => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.cartReducer.car
//   }
// }

// export default connect( mapStateToProps, { removeFeature })(AddedFeature);

export default AddedFeature