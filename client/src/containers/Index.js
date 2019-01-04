// import { bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { requestUser, changeInputField, startPostUser } from '../moducks/user';
import { visibleUsersSelector } from '../selectors';

import Index from '../components/Index';

const enhancer = compose(
  connect(
    state => ({
      users: visibleUsersSelector(state),
      inputUserName: state.user.inputUserName,
      userState: state.user
    }),
    {
      requestUser,
      changeInputField,
      startPostUser
    }
  ),
  pure
)

export default enhancer(props => {
  const { users, inputUserName, requestUser, changeInputField, startPostUser } = props;
  const propsValues = {
    users,
    inputUserName,
    requestUser,
    changeInputField,
    startPostUser
  }

  return (
    <Index {...propsValues} />
  )
});