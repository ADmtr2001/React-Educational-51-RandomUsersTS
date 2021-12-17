import React, {FC, useEffect} from 'react';

import {Wrapper, UsersWrapper} from "./UsersList.styles";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import UserItem from "../UserItem/UserItem";
import {useActions} from "../../hooks/useActions";

const UsersList: FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user);
  const {removeAllUsers, fetchUsers} = useActions();
  console.log(users);

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error...</h2>
  }

  return (
    <Wrapper>
      <h2>Users</h2>
      <button type='button' onClick={removeAllUsers}>Clear List</button>
      <button type='button' onClick={fetchUsers} style={{marginLeft: 10}}>Get New Users</button>
      <UsersWrapper>
        {users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </UsersWrapper>
    </Wrapper>
  );
};

export default UsersList;