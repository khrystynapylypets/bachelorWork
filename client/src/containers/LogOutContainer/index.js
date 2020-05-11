import { connect } from 'react-redux';
import { LogOut } from '../../components/LogOut';
import { userActions } from '../../store/actions/userActions';


function mapDispatchToProps(dispatch) {
  return {
    userActions: userActions.bind(dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(LogOut);
