import { createSelector } from 'reselect';

const usersSelector = state => state.user.users;

export const visibleUsersSelector = createSelector(
  [usersSelector],
  (usersSelector) => {
    return usersSelector.map(user => (
      Object.assign({}, user, { name: `${user.id}: ${user.name}`})
    ))
  }
)