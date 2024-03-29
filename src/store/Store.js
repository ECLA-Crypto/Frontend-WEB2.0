const defaultState = {
    topCoin:{},
    bottomCoin:{},
    graphdata:{},
    fetchTime:{time:1},
    connectPage: 'swap',
    privateSales: true,
    heroSection: [],
    investmentTopSection: [],
    investmentPlans: [],
    agriculture: false,
    agricproduct:false,
    real_estate:false,
    realEstateProduct:false,
    digitalAccessMarket: false,
    digitalAccessMarketProduct: false,
    marketplaceCarousel: false,
    pubbleHeroSection: false,
    pubbleAboutContent: false,
    pubbleAboutImages: false,
    guardLocation: false,
    profileUsername: false,
    profileEmail: false,
    profileWalletAddress: false,
    profileImage: false,
    hedgeTransaction: false,
    userProfile: false,
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
    } else if(action.type === "SET_INVESTMENT_PLANS_SECTION"){
        let newState = {...state, investmentPlans:action.payload}
        return newState;
    } else if(action.type === "SET_AGRICULTURE_SECTION"){
        let newState = {...state, agriculture:action.payload}
        return newState;
    } else if(action.type === "SET_AGRICULTURE_INVESTMENT"){
        let newState = {...state, agricproduct:action.payload}
        return newState;
    } else if(action.type === "SET_REALESTATE_SECTION"){
        let newState = {...state, real_estate:action.payload}
        return newState;
    } else if(action.type === "SET_REAL_ESTATE_INVESTMENT"){
        let newState = {...state, realEstateProduct:action.payload}
        return newState;
    } else if(action.type === "SET_ACCESS_MARKET_SECTION"){
        let newState = {...state, digitalAccessMarket:action.payload}
        return newState;
    } else if(action.type === "SET_DIGITAL_INVESTMENT"){
        let newState = {...state, digitalAccessMarketProduct:action.payload}
        return newState;
    } else if(action.type === "SET_MARKETPLACE_CAROUSEL"){
        let newState = {...state, marketplaceCarousel:action.payload}
        return newState;
    } else if(action.type === "SET_PUBBLE_HERO_SECTION"){
        let newState = {...state, pubbleHeroSection:action.payload}
        return newState;
    } else if(action.type === "SET_PUBBLE_ABOUT_CONTENT"){
        let newState = {...state, pubbleAboutContent:action.payload}
        return newState;
    } else if(action.type === "SET_PUBBLE_ABOUT_IMAGES"){
        let newState = {...state, pubbleAboutImages:action.payload}
        return newState;
    } else if(action.type === "SET_GUARD_LOCATION"){
        let newState = {...state, guardLocation:action.payload}
        return newState;
    } else if(action.type === "SET_PROFILE_USERNAME"){
        let newState = {...state, profileUsername:action.payload}
        return newState;
    } else if(action.type === "SET_PROFILE_EMAIL"){
        let newState = {...state, profileEmail:action.payload}
        return newState;
    } else if(action.type === "SET_PROFILE_WALLETADDRESS"){
        let newState = {...state, profileWalletAddress:action.payload}
        return newState;
    } else if(action.type === "SET_PROFILE_IMAGE"){
        let newState = {...state, profileImage:action.payload}
        return newState;
    } else if(action.type === "SET_HEDGE_TRANSACTION"){
        let newState = {...state, hedgeTransaction:action.payload}
        return newState;
    } else if(action.type === "SET_USER_INFO"){
        let newState = {...state, userProfile:action.payload}
        return newState;
    } 
    return state
}

export default coinReducer;