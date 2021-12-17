import React, {FC} from 'react';

import {Wrapper} from "./Users.styles";
import UsersList from "../../components/UsersList/UsersList";

const Users: FC = () => {
  return (
    <Wrapper>
      <UsersList />
    </Wrapper>
  );
};

export default Users;