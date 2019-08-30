import { connect } from 'react-redux';
import Hive from './components/hive';
import { fetchHives } from './hives.actions';

const mapStateToProps = ({ adminHives }) => ({
  hives: adminHives.hives,
});

const mapDispatchToProp = dispatch => ({
  fetchHives: dispatch(fetchHives()),
});

export default connect(mapStateToProps, mapDispatchToProp)(Hive);
