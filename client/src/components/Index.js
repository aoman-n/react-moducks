import React from 'react';
import { lifecycle } from 'recompose';

export default lifecycle({
  componentDidMount() {
    this.props.requestUser();
  }
})(Index);

function Index({ changeInputField, startPostUser, users, inputUserName, startDeleteUser }) {
  return (
    <React.Fragment>
      <div>
        <h1>Users</h1>
        { users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <button onClick={() => {
                startDeleteUser(user.id);
              }}>delete</button>
            </div>
          )
        }) }
      </div>
      <input type="text" value={inputUserName} onChange={e => changeInputField(e.target.value)} />
      <button onClick={startPostUser}>send</button>
    </React.Fragment>
  )
}