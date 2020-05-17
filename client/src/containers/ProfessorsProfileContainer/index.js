import { connect } from 'react-redux';
import { ProfilePage } from '../../components/ProfilePage';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.id,
});

const ProfessorsProfileContainer = connect(mapStateToProps, null)(ProfilePage);

export default ProfessorsProfileContainer;

