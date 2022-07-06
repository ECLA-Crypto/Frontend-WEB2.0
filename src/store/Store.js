const defaultState = {
    topCoin:{},
    bottomCoin:{},
    graphdata:{},
    fetchTime:{time:1},
}
const coinReducer = (state=defaultState, action ) =>{
    if(action.type === "SET_TOP_COIN"){
        let newState = {...state, topCoin:action.payload}
        return newState;
    } else if(action.type === "SET_Bottom_COIN"){
        let newState = {...state, bottomCoin:action.payload}
        return newState;
    } else if(action.type === "SET_GRAPH_DATA"){
        let newState = {...state, graphdata:action.payload}
        return newState;
    } else if(action.type === "SET_FETCH_TIME"){
        let newState = {...state, fetchTime:action.payload}
        return newState;
    }
    return state
}

export default coinReducer;