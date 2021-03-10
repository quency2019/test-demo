

export default {
  state: {
    storeState: 1,
    value: "value"

  },
  reducers: {
    add(state, actions) {
      console.log(actions, " actions")
      return {
        ...state,
        storeState: actions.payload
      }

    },



  },
  effects: {
    *fetch(actions, { put }) {
      console.log("actions", actions)
      yield put({
        type: "add",
        payload: actions.payload
      })

    }

  }

}