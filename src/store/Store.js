const defaultState = {
    topCoin:{},
    bottomCoin:{},
    graphdata:{},
    fetchTime:{time:1},
    connectPage: 'swap',
    privateSales: true,
    heroSection: [],
    investmentTopSection: [],
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
    } else if(action.type === "SET_CONNECTION_PAGE"){
        let newState = {...state, connectPage:action.payload}
        return newState;
    } else if(action.type === "SET_PRIVATE_SALES"){
        let newState = {...state, privateSales:action.payload}
        return newState;
    } else if(action.type === "SET_HERO_SECTION"){
        let newState = {...state, heroSection:action.payload}
        return newState;
    } else if(action.type === "SET_INVESTMENT_TOP_SECTION"){
        let newState = {...state, investmentTopSection:action.payload}
        return newState;
    }
    return state
}

export default coinReducer;