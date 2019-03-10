import { connect } from 'react-redux';

import { fetchPublicUsers } from './home.actions';
import Home from './home.component';

const mapStateToProps = ({ home: { loading, users } }) => ({
  loading,
  users,
});

const mapDispatchToProps = dispatch => ({
  fetchPublicUsers: fetchPublicUsers(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
