import { connect } from 'react-redux';
import Users from './Main';
import { fetchUsers, searchUser } from './users.actions';

const mapStateToProps = ({ adminUsers }) => ({
  ...adminUsers,
});

const mapDispatchToProp = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  searchUser: (needle) => dispatch(searchUser(needle)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Users);
