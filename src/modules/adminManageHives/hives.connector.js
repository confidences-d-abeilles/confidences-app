import { connect } from 'react-redux';
import Hives from './hives.component';
import { addHive, fetchHives } from './hives.actions';

const mapStateToProps = ({ adminHives }) => ({
  ...adminHives,
});

const mapDispatchToProp = dispatch => ({
  fetchHives: needle => dispatch(fetchHives(needle)),
  addHive: name => dispatch(addHive(name)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Hives);
