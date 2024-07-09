import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setUser } from "../store/actions";

import "../css/UserProfile.css";

const UserProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <button onClick={() => dispatch(setUser({ name: "Fatih Tün", age: 22 }))}>
        Update User
      </button>
      <button onClick={() => dispatch(setUser({ name: "", age: 0 }))}>
        Reset User
      </button>
    </div>
  );
};

export default UserProfile;
