import React, { Component } from 'react';
import { CoefficientsCell } from '../../components/TableCells';
import { connect } from 'react-redux';

class CoefficientsCellContainer extends Component {

  render() {
    return (
      <>
        <CoefficientsCell coefficients={this.props.coefficients} semester={this.props.semester}
          scheduleOfSemesters={this.props.scheduleOfSemesters} />
      </>
    );
  }
}

const mapStateToProps = ({ schedule }) => ({
  scheduleOfSemesters: schedule.semesters,
  schedule: schedule
})

export default connect(
  mapStateToProps,
  null,
)(CoefficientsCellContainer);