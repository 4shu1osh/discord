const initialState={
    user: '',
    pass: '',
}

const LoginReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
      case 'USER':
        return {...state, user: payload};
        case 'PASS':
            return {...state, pass: payload};
      default:
        return {state};
    }
  };
  
  export default LoginReducer;
  