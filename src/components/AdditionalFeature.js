import React from 'react';
// import { connect } from 'react-redux'
// import { addItem } from '../actions/cartActions'

const AdditionalFeature = props => {
  // console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={ () => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.cartReducer.car
//   }
// }

// export default connect( mapStateToProps, { addItem })(AdditionalFeature);

export default AdditionalFeature