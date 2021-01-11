const defaultState = {
  list: ['zhangsan', 'lisi']
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'push':
      return {
        ...state,
        list: [
          ...state.list,
          action.task
        ]
      }
    case 'delete':
      let newList = state.list.filter((item) => {
        return item !== action.task
      })
      return {
        ...state,
        list: newList
      }
    default:
      return state
  }
}

export default reducer;