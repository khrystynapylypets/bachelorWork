import { connect } from 'react-redux';
import { ProfilePage } from '../../components/ProfilePage';

const mapStateToProps = ({user}) => ({
  userId: user.currentUser.id,
});

const ProfilePageContainer = connect(mapStateToProps, null)(ProfilePage);

export default ProfilePageContainer;

