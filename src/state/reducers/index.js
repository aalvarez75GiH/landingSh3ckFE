import { combineReducers} from 'redux'
import sideBarReducer from './sideBarReducers'
import heroSectionReducer from './heroSectionReducers'
import contactSectionReducer from './contactSectionReducers'
import homeReducers from './homeReducers'
import checkSectionReducer from './checkSectionReducers'
import checkOrderReducer from './checkApp/checkOrderReducers'
import citySectionReducer from './checkApp/cityReducers'
import categoryAndSTReducers from './checkApp/categoryAndSTReducers'
import overallCheckAppReducers from './checkApp/overalCheckAppReducers' 
import productToCheckReducer from './checkApp/productTocheckreducers'
import checkersReducer from './checkApp/checkersReducers'
import checkTypeReducer from './checkApp/checkTypesReducers'
import paymentsReducer from './checkApp/paymentsReducers'
import adminAppReducer from './adminApp/adminAppReducers'
const reducers = combineReducers({
    // account: sideBarReducer,
    sideBarState: sideBarReducer,
    heroSection: heroSectionReducer,
    contactSectionState: contactSectionReducer,
    homeState: homeReducers,
    // checkSectionState: checkSectionReducer,
    cityState: citySectionReducer,
    categoryAndSTState: categoryAndSTReducers,
    overallCheckAppState: overallCheckAppReducers,
    productToCheckState: productToCheckReducer,
    checkOrderState: checkOrderReducer,
    checkersState: checkersReducer,
    checkTypeState: checkTypeReducer,
    paymentsState: paymentsReducer,  
    adminAppState: adminAppReducer

})

export default reducers