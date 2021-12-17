import React, {FC, Fragment, useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Users from "./pages/Users/Users";
import {useActions} from "./hooks/useActions";

const App: FC = () => {
  const {fetchUsers} = useActions();

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path='welcome' element={<Welcome/>}>
          <Route path='users' element={<Users/>}/>
        </Route>
        <Route path='*' element={<Navigate replace to='/welcome'/>}/>
      </Routes>
    </Fragment>
  );
};

export default App;