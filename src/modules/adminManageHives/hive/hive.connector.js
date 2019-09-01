import { connect } from 'react-redux';
import Hive from './hive.component';
import { fetchHives } from '../hives.actions';
import { getHive } from './hive.selectors';
import { addPhoto, fetchHive, updateInfo } from './hive.actions';

const mapStateToProps = ({ adminHives }) => ({
  hives: adminHives.hives,
  getHive: id => getHive(adminHives, id),
});

const mapDispatchToProp = dispatch => ({
  fetchHives: () => dispatch(fetchHives()),
  updateInfo: (id, key, value) => dispatch(updateInfo(id, key, value)),
  addPhoto: (id, file) => dispatch(addPhoto(id, file)),
  fetchHive: id => dispatch(fetchHive(id)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Hive);
