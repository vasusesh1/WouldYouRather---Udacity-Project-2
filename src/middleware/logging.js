const logging = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("Action triggered: ", action)
    const retVal = next(action)
    console.log("State Info: ", store.getState())
    console.groupEnd()
    return retVal
}

export default logging