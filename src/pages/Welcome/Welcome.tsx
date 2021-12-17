import React, {FC, Fragment, useState} from 'react';
import {Outlet} from "react-router";

import {Wrapper} from "./Welcome.styles";
import {Link} from "react-router-dom";

const Welcome: FC = () => {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <Fragment>
      <Wrapper>
        {showUsers ?
          (
            <Link to='/welcome' onClick={() => setShowUsers((prev) => !prev)}>Hide Users</Link>
          ) : (
            <Link to='users' onClick={() => setShowUsers((prev) => !prev)}>Show Users</Link>
          )}
      </Wrapper>
      <Outlet/>
    </Fragment>
  );
};

export default Welcome;