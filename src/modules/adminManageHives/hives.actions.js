export const HIVES_FETCH = 'admin/manage/hives/FETCH';
export const HIVES_FETCH_SUCCESS = 'admin/manage/hives/FETCH_SUCCESS';
export const HIVES_FETCH_FAIL = 'admin/manage/hives/FETCH_FAIL';

export const fetchHives = needle => ({ type: HIVES_FETCH, needle });

export const HIVES_ADD = 'admin/manage/hives/ADD';
export const HIVES_ADD_SUCCESS = 'admin/manage/hives/ADD_SUCCESS';
export const HIVES_ADD_FAIL = 'admin/manage/hives/ADD_FAIL';

export const addHive = name => ({ type: HIVES_ADD, name });
