import React, { Component } from 'react';
import { LogIn } from '../../components/LogIn';
import { reduxForm } from 'redux-form';
import { validate } from '../../utils/validation';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions/userActions';
import { ErrorAlert } from '../../components/ErrorAlert';


class LogInContainer extends Component {
  handleOnSubmit = (user) => {
    const { userActions, reset } = this.props;

    userActions.loginUser(user);
    reset();
  }

  render() {
    const { handleSubmit, submitting, invalid, errorMessage } = this.props;

    return (
      <>
        {errorMessage
          && <ErrorAlert description={errorMessage} />
        }
        <LogIn
          handleSubmit={handleSubmit}
          onSubmit={this.handleOnSubmit}
          invalid={invalid}
          submitting={submitting}
        />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: userActions.bind(dispatch),
  };
}

const mapStateToProps = ({ user }) => ({
  errorMessage: user.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'login',
    validate,
  })(LogInContainer),
);
