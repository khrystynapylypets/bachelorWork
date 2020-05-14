import { connect } from 'react-redux';
import { ProfileDetails } from '../../components/ProfileDetails';
import { formatDate } from '../../helpers/generalFunctions';
import { userActions } from '../../store/actions/userActions';

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  email: state.user.email,
  firstName: state.user.firstName,
  secondName: state.user.secondName,
  lastName: state.user.lastName,
  dateWork: formatDate(state.user.dateWork),
  academicStatus: state.user.academicStatus,
  dateBirth: formatDate(state.user.dateBirth),
  phoneNumber: state.user.phoneNumber,
});

function mapDispatchToProps(dispatch) {
  return {
    userActions: userActions.bind(dispatch),
  };
}

const ProfileDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);

export default ProfileDetailsContainer;
