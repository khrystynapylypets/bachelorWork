import { connect } from 'react-redux';
import { ProfessorsList } from '../../components/ProfessorsList';
import { professorsActions } from '../../store/actions/professorsActions';

const mapStateToProps = (state) => ({
  isQuerying: state.professors.isQuerying,
  list: state.professors.list,
  filter: state.professors.filter,
  count: state.professors.count,
  error: state.professors.error,
});

function mapDispatchToProps(dispatch) {
  return {
    professorsActions: professorsActions.bind(dispatch),
  };
}


const ProfessorsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProfessorsList);

export default ProfessorsListContainer;
