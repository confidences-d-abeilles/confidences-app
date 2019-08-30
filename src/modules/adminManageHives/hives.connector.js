import { connect } from 'react-redux';
import Hives from './hives';
import { addHive, fetchHives } from './hives.actions';

const mapStateToProps = ({ adminHives: { hives, needle } }) => ({
  hives,
  needle,
});

const mapDispatchToProp = {
  fetchHives,
  addHive,
};

export default connect(mapStateToProps, mapDispatchToProp)(Hives);
