import { connect } from 'react-redux';
import { ProfilePage } from '../../components/ProfilePage';
import { professorsActions } from '../../store/actions/professorsActions';
import { eventActions } from '../../store/actions/eventActions';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.id,
  eventsList: state.event.events,
});

function mapDispatchToProps(dispatch) {
  return {
    professorsActions: professorsActions.bind(dispatch),
    eventActions: eventActions.bind(dispatch),
  };
}

const ProfessorsProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default ProfessorsProfileContainer;

