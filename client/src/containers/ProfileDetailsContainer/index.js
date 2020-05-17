import { connect } from 'react-redux';
import { ProfileDetails } from '../../components/ProfilePage/ProfileDetails';
import { formatDate } from '../../helpers/generalFunctions';
import { userActions } from '../../store/actions/userActions';

const mapStateToProps = ({user}) => ({
  loading: user.selectedUser.loading,
  email: user.selectedUser.email,
  firstName: user.selectedUser.firstName,
  secondName: user.selectedUser.secondName,
  lastName: user.selectedUser.lastName,
  dateWork: formatDate(user.selectedUser.dateWork),
  academicStatus: user.selectedUser.academicStatus,
  dateBirth: formatDate(user.selectedUser.dateBirth),
  phoneNumber: user.selectedUser.phoneNumber,
  canCreateSchedule: user.selectedUser.canCreateSchedule,
  created: user.selectedUser.created,
  isAdmin: user.selectedUser.isAdmin,
});

function mapDispatchToProps(dispatch) {
  return {
    userActions: userActions.bind(dispatch),
  };
}

const ProfileDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);

export default ProfileDetailsContainer;
