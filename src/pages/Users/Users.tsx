import React, {FC, useEffect} from 'react';

import {Wrapper} from "./Users.styles";
import UsersList from "../../components/UsersList/UsersList";
import {useActions} from "../../hooks/useActions";

const Users: FC = () => {
  const {toggleShowUsers} = useActions();

  useEffect(() => {
    toggleShowUsers(true);
  }, []);

  return (
    <Wrapper>
      <UsersList />
    </Wrapper>
  );
};

export default Users;