import moducks from './index';
import { call, select } from 'redux-saga/effects'
import { fetchUsers, postUser, deleteUser } from '../api'

const initialState = {
  users: [],
  pending: false,
  inputUserName: ''
}

export const {
  user, sagas,
  requestUser,
  successUser,
  successPostUser,
  changeInputField,
  startPostUser,
  startDeleteUser,
  successDeleteUser
} = moducks.createModule('user', {

  CHANGE_INPUT_FIELD: (state, action) => ({
    ...state,
    inputUserName: action.payload
  }),

  REQUEST_USER: {
    reducer: state => ({
      ...state,
      pending: true
    }),
    saga: function* (action) {
      return successUser(yield call(fetchUsers))
    }
  },

  SUCCESS_USER: {
    reducer: (state, action) => ({
      ...state,
      users: action.payload.data,
      pending: false
    })
  },

  START_POST_USER: {
    reducer: (state, action) => ({
      ...state,
      pending: true
    }),
    saga: function* (action) {
      const { inputUserName } = yield select(state => state.user);
      return successPostUser(yield call(postUser, inputUserName))
    }
  },

  SUCCESS_POST_USER: (state, action) => ({
    ...state,
    users: action.payload.data,
    inputUserName: '',
    pending: false,
  }),

  START_DELETE_USER: {
    reducer: (state, action) => ({
      ...state,
      pending: true
    }),
    saga: function* (action) {
      return successDeleteUser(yield call(deleteUser, action.payload));
    }
  },

  SUCCESS_DELETE_USER: (state, action) => ({
    ...state,
    users: action.payload.data,
    pending: false,
  }),

}, initialState);