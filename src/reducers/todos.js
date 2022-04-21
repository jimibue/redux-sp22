// a reducer is just a function (pure function)=> doesn't have side effect
// does not mutate state returns new state
// that state params and action.
// an action is javascript object that has key type and maybe thing
// {type:string, ....}

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.todo, ...state];
    default:
      return state;
  }
};

export default todos



