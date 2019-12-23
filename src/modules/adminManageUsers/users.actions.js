export const USERS_FETCH = 'admin/manage/users/FETCH';
export const USERS_FETCH_SUCCESS = 'admin/manage/users/FETCH_SUCCESS';
export const USERS_FETCH_FAIL = 'admin/manage/users/FETCH_FAIL';

export const USERS_SEARCH = 'admin/manage/users/SEARCH';

export const fetchUsers = () => ({ type: USERS_FETCH });

export const searchUser = str => ({ type: USERS_SEARCH, data: str });
