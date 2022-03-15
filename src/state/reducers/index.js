import { combineReducers} from 'redux'
import sideBarReducer from './sideBarReducers'
import heroSectionReducer from './heroSectionReducers'
import contactSectionReducer from './contactSectionReducers'
import homeReducers from './homeReducers'
import checkSectionReducer from './checkSectionReducers'
import citySectionReducer from './checkApp/cityReducers'
const reducers = combineReducers({
    // account: sideBarReducer,
    sideBarState: sideBarReducer,
    heroSection: heroSectionReducer,
    contactSectionState: contactSectionReducer,
    homeState: homeReducers,
    checkSectionState: checkSectionReducer,
    cityState: citySectionReducer 

})

export default reducers