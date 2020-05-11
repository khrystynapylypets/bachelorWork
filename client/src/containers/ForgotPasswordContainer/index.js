import React, { Component } from 'react';
import { ForgotPassword } from '../../components/ForgotPassword';
import { reduxForm } from 'redux-form';
import { validate } from '../../utils/validation';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions/userActions';


class ForgotPasswordContainer extends Component {
  handleOnSubmit = (email) => {
    const { userActions } = this.props;

    userActions.resetPassword(email);
  }

  render() {
    const { handleSubmit, submitting, invalid } = this.props;

    return (
      <ForgotPassword
        handleSubmit={handleSubmit}
        onSubmit={this.handleOnSubmit}
        invalid={invalid}
        submitting={submitting}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: userActions.bind(dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'forgotPassword',
    validate,
  })(ForgotPasswordContainer),
);
