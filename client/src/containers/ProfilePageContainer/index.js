import { connect } from 'react-redux';
import { ProfilePage } from '../../components/ProfilePage';
import { professorsActions } from '../../store/actions/professorsActions';
import { eventActions } from '../../store/actions/eventActions';

const mapStateToProps = ({ user, event }) => ({
  userId: user.currentUser.id,
  eventsList: event.events,
});


function mapDispatchToProps(dispatch) {
  return {
    professorsActions: professorsActions.bind(dispatch),
    eventActions: eventActions.bind(dispatch),
  };
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default ProfilePageContainer;

