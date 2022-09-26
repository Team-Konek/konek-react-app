import { createContext } from "react";

const initialState = {
  id: 0,
  role: "admin",
};

function UserReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default UserReducer;