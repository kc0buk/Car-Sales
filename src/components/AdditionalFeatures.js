import React from 'react';
// import { connect } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     car: state.cartReducer.car
//   }
// }

// export default connect( mapStateToProps, {})(AdditionalFeatures);

export default AdditionalFeatures