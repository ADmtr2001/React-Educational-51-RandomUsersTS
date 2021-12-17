import React, {FC, useEffect} from 'react';

import {Wrapper, UsersWrapper} from "./UsersList.styles";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import UserItem from "../UserItem/UserItem";

const UsersList: FC = () => {
  const {users} = useTypedSelector(state => state.user);
  console.log(users);

  return (
    <Wrapper>
      <h2>Users</h2>
      <UsersWrapper>
        {users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </UsersWrapper>
    </Wrapper>
  );
};

export default UsersList;