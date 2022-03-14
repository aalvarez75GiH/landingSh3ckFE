import { combineReducers} from 'redux'
import sideBarReducer from './sideBarReducers'
import heroSectionReducer from './heroSectionReducers'
import contactSectionReducer from './contactSectionReducers'
import homeReducers from './homeReducers'
import checkSectionReducer from './checkSectionReducers'
import checkAppReducer from './checkAppReducers'
const reducers = combineReducers({
    // account: sideBarReducer,
    sideBarState: sideBarReducer,
    heroSection: heroSectionReducer,
    contactSectionState: contactSectionReducer,
    homeState: homeReducers,
    checkSectionState: checkSectionReducer,
    checkAppState: checkAppReducer 

})

export default reducers