import React, { Component } from 'react';
import { Registration } from '../../components/Registration';
import { reduxForm } from 'redux-form';
import { validate } from '../../utils/validation';
import { connect } from 'react-redux';
import { ErrorAlert } from '../../components/ErrorAlert';
import { userActions } from '../../store/actions/userActions';

class RegistrationContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

    handleOnSubmit = (user) => {
      const { userActions, reset } = this.props;

      userActions.registerUser(user);
      reset();
    }


    render() {
      const { handleSubmit, submitting, invalid, errorMessage } = this.props;

      return (
        <>
          {errorMessage
                && <ErrorAlert description={errorMessage} />
          }
          <Registration
            handleSubmit={handleSubmit}
            onSubmit={this.handleOnSubmit}
            submitting={submitting}
            invalid={invalid}
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
    form: 'registerForm',
    validate,
  })(RegistrationContainer),
);
