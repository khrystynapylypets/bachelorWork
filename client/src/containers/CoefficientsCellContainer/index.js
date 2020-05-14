import React, { Component } from 'react';
import { CoefficientsCell } from '../../components/TableCells';
import { connect } from 'react-redux';

class CoefficientsCellContainer extends Component {
  render() {
    const { coefficients, semester, scheduleOfSemesters } = this.props;

    return (
      <>
        <CoefficientsCell
          coefficients={coefficients}
          semester={semester}
          scheduleOfSemesters={scheduleOfSemesters}
        />
      </>
    );
  }
}

const mapStateToProps = ({ schedule }) => ({
  scheduleOfSemesters: schedule.semesters,
  schedule: schedule,
});

export default connect(
  mapStateToProps,
  null,
)(CoefficientsCellContainer);
