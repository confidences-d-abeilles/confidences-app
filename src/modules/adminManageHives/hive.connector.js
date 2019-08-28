import { connect } from 'react-redux';
import Hive from './hive';
import { fetchHives } from './hives.actions';

const mapStateToProps = ({ adminHives }) => ({
  hives: adminHives.hives,
});

const mapDispatchToProp = {
  fetchHives,
};

export default connect(mapStateToProps, mapDispatchToProp)(Hive);
