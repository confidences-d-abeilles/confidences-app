import { connect } from 'react-redux';
import Hives from './hives';
import { fetchHives } from './hives.actions';

const mapStateToProps = ({ adminHives }) => ({
  hives: adminHives.hives,
});

const mapDispatchToProp = {
  fetchHives,
};

export default connect(mapStateToProps, mapDispatchToProp)(Hives);
