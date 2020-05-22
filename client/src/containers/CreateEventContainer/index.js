import { CreateEventModal } from '../../components/CreateEventModal';
import { connect } from 'react-redux';
import { eventActions } from '../../store/actions/eventActions';

const mapStateToProps = ({ professors, event, user }) => ({
  list: professors.list,
  isCreating: event.isCreating,
  error: event.error,
  currentUserId: user.currentUser.id,
});

function mapDispatchToProps(dispatch) {
  return {
    eventActions: eventActions.bind(dispatch),
  };
}


const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEventModal);

export default CreateEventContainer;
