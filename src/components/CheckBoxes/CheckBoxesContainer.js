import React from 'react';
import { connect } from 'react-redux';
import { checkBoxChecksCreator } from '../../redux/filterReduser';
import CheckBoxes from './CheckBoxes';

const CheckBoxesContainer = (props) => {

  return <CheckBoxes {...props} />
}

let mapStateToProps = (state) => ({
  checkbox: state.filterOptions.checkbox
});

export default connect(mapStateToProps, { checkBoxChecksCreator })(CheckBoxesContainer);