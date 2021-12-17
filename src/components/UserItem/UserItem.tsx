import React, {FC} from 'react';

import {Wrapper} from "./UserItem.styles";
import {User} from "../../types/user";

interface UserItemProps {
  user: User;
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <Wrapper>
      <button type='button'>Remove</button>
      <img src={user.avatar} alt='avatar' />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <p>{user.address.country} - {user.address.city} - {user.address.street_name}</p>
    </Wrapper>
  );
};

export default UserItem;