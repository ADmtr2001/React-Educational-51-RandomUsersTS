import React, {FC, useEffect} from 'react';

import {Wrapper, UsersWrapper} from "./UsersList.styles";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import UserItem from "../UserItem/UserItem";
import {useActions} from "../../hooks/useActions";

const UsersList: FC = () => {
  const {users} = useTypedSelector(state => state.user);
  const {removeAllUsers} = useActions();
  console.log(users);

  return (
    <Wrapper>
      <h2>Users</h2>
      <button type='button' onClick={removeAllUsers}>Clear List</button>
      <UsersWrapper>
        {users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </UsersWrapper>
    </Wrapper>
  );
};

export default UsersList;