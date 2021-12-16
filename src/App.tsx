import React, {FC, Fragment} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Users from "./pages/Users/Users";

const App: FC = () => {
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