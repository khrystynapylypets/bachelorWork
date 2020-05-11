import { connect } from 'react-redux';
import { ProfilePage } from '../../components/ProfilePage';

const mapStateToProps = (state) => ({
  userId: state.user.id,
});

const ProfilePageContainer = connect(mapStateToProps, null)(ProfilePage);

export default ProfilePageContainer;

