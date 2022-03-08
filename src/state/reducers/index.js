import { combineReducers} from 'redux'
import sideBarReducer from './sideBarReducers'
import heroSectionReducer from './heroSectionReducers'
import contactSectionReducer from './contactSectionReducers'
import homeReducers from './homeReducers'

const reducers = combineReducers({
    // account: sideBarReducer,
    sideBarState: sideBarReducer,
    heroSection: heroSectionReducer,
    contactSectionState: contactSectionReducer,
    homeState: homeReducers 

})

export default reducers