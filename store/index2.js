import Vuex from 'vuex';
import {LOCATION_MODULE} from './module-types/localtion'
import location from './cart/location'

const createStore = () => {
    const store = new Vuex.Store({})
    store.registerModule([LOCATION_MODULE], location)
    
    return store
}

export default createStore