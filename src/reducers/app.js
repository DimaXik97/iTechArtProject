const app = (state = {order: true}, action) => {
    switch (action.type) {
    case 'CHANGE_ORDER':{
        return Object.assign({}, state, {
            order: action.order});
    }
    default:
      return state
    }
}

export default app;