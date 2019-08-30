import { connect } from 'react-redux';
import Hives from './hives.component';
import { addHive, fetchHives } from './hives.actions';

const mapStateToProps = ({ adminHives }) => ({
  ...adminHives,
});

const mapDispatchToProp = dispatch => ({
  fetchHives: needle => dispatch(fetchHives(needle)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Hives);
