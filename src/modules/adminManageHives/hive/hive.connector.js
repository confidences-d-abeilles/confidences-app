import { connect } from 'react-redux';
import Hive from './hive';
import { fetchHives } from '../hives.actions';
import { getHive } from './hive.selectors';

const mapStateToProps = ({ adminHives }) => ({
  hives: adminHives.hives,
  getHive: id => getHive(adminHives, id),
});

const mapDispatchToProp = dispatch => ({
  fetchHives: () => dispatch(fetchHives()),
});

export default connect(mapStateToProps, mapDispatchToProp)(Hive);
