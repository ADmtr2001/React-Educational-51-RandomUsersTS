import React, {FC, Fragment, useEffect, useState} from 'react';
import {Outlet} from "react-router";

import {Wrapper} from "./Welcome.styles";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Welcome: FC = () => {
  const {showUsers} = useTypedSelector(state => state.user);
  const {toggleShowUsers} = useActions();

  return (
    <Fragment>
      <Wrapper>
        {showUsers ?
          (
            <Link to='/welcome' onClick={() => toggleShowUsers(false)}>Hide Users</Link>
          ) : (
            <Link to='users' onClick={() => toggleShowUsers(true)}>Show Users</Link>
          )}
      </Wrapper>
      <Outlet/>
    </Fragment>
  );
};

export default Welcome;