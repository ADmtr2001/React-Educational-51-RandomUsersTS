import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {fetchUsers} from "./store/action-creators/user";

const App: FC = () => {
  const dispatch = useDispatch();
  dispatch(fetchUsers());
  return (
    <div>
      App
    </div>
  );
};

export default App;